import DoneIcon from '@/components/common/done_swap';
import { ErkannteBehandlungsElemente as VetCaseRecord, LazyConversationStatement, LazyErkannteBehandlungsElemente as LazyVetCaseRecord, ConversationStatement} from '@/models';
import React, { useEffect } from 'react';
import { Storage } from 'aws-amplify';
import { deleteBehandlung, updateBehandlung } from '@/app_lib/services/vetcase_service';
import PrettyJson from '@/components/common/pretty_json';
import { updateConversationStatement } from '@/app_lib/services/conversation_statement_service';


interface Props {
  vetCase: LazyVetCaseRecord;
  className?: string;
}

const VetCaseComponent: React.FC<Props> = ({ 
  vetCase,
  className
}) => {
  const [audioUrl, setAudioUrl] = React.useState<string>('');
  const [convStmt, setConvStmt] = React.useState<LazyConversationStatement>();
  
  useEffect(() => {
    const fetchData = async () => {
      setConvStmt( await vetCase.HumanRequest );
      if(convStmt) setAudioUrl(await fetchAudioUrl(convStmt));
      const vetCaseVorbericht = JSON.parse(vetCase.Vorbericht? vetCase.Vorbericht: "{'Status':'Nicht angegeben'}");
    } 

    fetchData();
  }, [vetCase]);

  
  const fetchAudioUrl = async (stmt: LazyConversationStatement) => {
    if(!stmt) return '';
    const audioFileName = (await stmt.AudioSpeechRecording)?.Filename || '';
    if(!audioFileName) return '';
    try {
      const audioUrl = await Storage.get(audioFileName, { level: 'protected' });
      return audioUrl;
    } catch (error) {
      console.log('fetchAudioUrl error: ', error);
    }
    return '';
  }

  const onDelete = () => {
    deleteBehandlung(vetCase)
  }

  const onDone = () => {
    const updatedBehandlung = VetCaseRecord.copyOf(vetCase, (updated) => {
      updated.InPegassusErfasst = updated.InPegassusErfasst? null: (new Date()).toISOString();
    });
    updateBehandlung(updatedBehandlung)
    vetCase = updatedBehandlung;

    vetCase.HumanRequest.then((stmt) => {
      if(!stmt) return;
      const updatedStmt = ConversationStatement.copyOf(stmt, (updated) => {
        updated.Done = !updated.Done;
      });
      updateConversationStatement(updatedStmt);
    })

  }

  function toTime(AWSDateTime: string) {
    const date = new Date(AWSDateTime);
    return `${date.getHours()}:${date.getMinutes()}`    
  }

  return (
    
    <div className="flex flex-row items-center pb-4">
        <div className={`collapse bg-lime-500 w-11/12 ${className}`} onClick={(e) => {e.stopPropagation();}}>
            <input type="checkbox" /> 
            <div className="collapse-title font-accent h-1
                            flex justify-between">
                <div className='text-base font-medium w-full block truncate'>{vetCase.Kunde}</div>
                <div className='text-sm'>{toTime(vetCase.ErfassungsZeitpunkt)}</div>
            </div>
            <div className="collapse-content bg-lime-400"> 
              <div className="flex flex-col overflow-x-auto w-[65%] sm:w-full">
                {/* <audio controls  src={audioUrl}/> */}
                <PrettyJson title="Vorbericht" data={vetCase.Vorbericht} withLeafeTable={false}/>
                <PrettyJson title="Befunde" data={vetCase.Befunde} />
                <PrettyJson title="Diagnosen" data={vetCase.Diagnosen} />
                <PrettyJson title="Massnahmen" data={vetCase.TherapieMassnahmen}  withLeafeTable={false}/>
                <PrettyJson title="Verwendet" data={vetCase.VerwendeteTherapieMittel} />
                <PrettyJson title="Abgegeben" data={vetCase.AbgegebeneTherapieMittel} />
              </div>
              <div className="divider"></div>
              <div className="flex flex-col overflow-x-auto w-[65%] sm:w-full">
                <p className="italic text-sm pb-2">{convStmt?.StatementText}</p>
              </div>
              <div className="button bg-red-600 p-1 rounded-md text-xs cursor-pointer w-fit" onClick={onDelete}>DEL</div>
            </div>    
        </div>    

        <DoneIcon className='w-6 h-6 pl-0.5 pr-0.5'
            state={vetCase.InPegassusErfasst && vetCase.InPegassusErfasst.length > 0? true: false}
            onChange={onDone} />
    </div>

  );
}

export default VetCaseComponent;

