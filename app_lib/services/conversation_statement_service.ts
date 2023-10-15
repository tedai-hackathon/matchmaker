import { API, DataStore, Predicates, SortDirection } from 'aws-amplify';
import { AudioSpeechRecording, ConversationParticipant, ConversationStatement, LazyConversationParticipant } from '@/models';
import { createAudioSpeechRecording } from './audio_speech_recordings_service';


/**
 * Fetches conversation statements from the DataStore.
 * @param conversation The conversation to filter by, can be a Conversation object or its ID.
 * @param participant The participant to filter by, can be a ConversationParticipant object or its ID.
 * @param sorted The sort direction for the results.
 * @param maxElements The maximum number of elements to return.
 * @returns A Promise that resolves to an array of ConversationStatement objects.
 */
export const fetchConversationStatements = async (
    participant?: ConversationParticipant | string,
    sorted?: SortDirection, 
    maxElements?: number) => {
    const isFiltered = participant
    const participantID = participant? (typeof participant === "string"? participant: participant.id): ""

    return await DataStore.query(ConversationStatement, 
        isFiltered? (c) => c.and(c => [
            participantID? c.Participant.id.eq(participantID): c.Participant.id.ne("")
        ])
            :Predicates.ALL,
        {sort: sorted? (s) => s.createdAt(sorted): undefined,
         limit: maxElements? maxElements: undefined })
  }

export const fetchConversationStatement = async (id: string) => {
    const result = await DataStore.query(ConversationStatement, 
        (c) => c.id.eq(id)) 
    return result[0]
  }

export const fetchLatestConversationStatements = async ( maxElements?: number ) => {
    const result = await DataStore.query(ConversationStatement,  
        (c) => c.id.ne(""),
        {sort: (s) => s.createdAt(SortDirection.DESCENDING),
         limit: maxElements? maxElements: 50 })
    return result
}

export const createConversationStatement = async (statement: ConversationStatement) => {
    return await DataStore.save(statement);
}

export const updateConversationStatement = async (statement: ConversationStatement) => {
    return await DataStore.save(statement);
}

export const deleteConversationStatement = async (statement: ConversationStatement) => {
    return await DataStore.delete(statement);
}

const composeConversationStatement = (message: string, participant: LazyConversationParticipant, datetime?: Date) => {
    if( message && message.trim().length > 0  && participant ) {
        const statementDateTime = datetime? datetime.toISOString(): (new Date()).toISOString()
        return new ConversationStatement({
            StatementText: message,
            Participant: participant,
            DateTime: statementDateTime,
            conversationParticipantConversationStatementsId: participant.id,
            Done: false,
        });
        }
    return null; 
}

export const addMsgToConversation = (message: string, participant: LazyConversationParticipant, recordingFile?: string, datetime?: Date) => {
    const newStatement = composeConversationStatement(message, participant, datetime);
    if( newStatement ) {
      const createdStatement = createConversationStatement(newStatement);

      if( recordingFile ){
        createdStatement.then( (stmt: ConversationStatement) => {
          const _recordingFile = recordingFile;
          const recording = new AudioSpeechRecording({
            DateTime: stmt.DateTime,
            Filename: _recordingFile,
            ConversationStatement: stmt,
            audioSpeechRecordingConversationStatementId: stmt.id
          })

          createAudioSpeechRecording(recording).then( (recording: AudioSpeechRecording) => {
            console.log("AudioSpeechRecording created: " + recording.id);
            const updatedStmt = ConversationStatement.copyOf(stmt, (updated) => {
              updated.AudioSpeechRecording = recording;
            });
            updateConversationStatement(updatedStmt)
          })
        })
      }

      return newStatement;
    }
    return null;
}