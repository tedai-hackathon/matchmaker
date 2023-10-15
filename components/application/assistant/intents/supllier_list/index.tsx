import useConversationStatementsSubscription from '@/app_lib/hooks/use_conversation_statement_subscription';
import Transcription from './[supplier_entry]';
import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { LazyConversationStatement, ParticipantType } from '@/models';
import { useUserAndAIParticipants } from '@/app_lib/hooks/use_conversation_participants';
import { DateType, DateValueType } from 'react-tailwindcss-datepicker/dist/types';

interface Props {
  startDate?: Date;
  endDate?: Date;
  searchText?: string;
  offset?: number;
  pageSize?: number;
  children?: React.ReactNode;  // Add this line
}

const Transcriptions: React.FC<Props> = ({
  startDate,
  endDate,
  searchText,
  offset = 0,
  pageSize = 50,
  children }) => {
  const [displayedConvStmts, setDisplayedConvStmts] = useState<LazyConversationStatement[]>([]);
  

  const { statements: conversationStatements, isSynced, refreshConvStmts} = useConversationStatementsSubscription(pageSize, startDate, endDate, searchText);

  
  useEffect(() => {
    const updateDisplStmts = async () => {
      if (conversationStatements && conversationStatements.length > 0) {
        const _stmtsSlice = conversationStatements.slice(offset, pageSize);
        
        const filteredPromises = await Promise.all(
          _stmtsSlice.map(async stmt => {
            const participant = await stmt.Participant;
            return participant.Type === ParticipantType.HUMAN ? stmt : null;
          })
        );
        
        const _humanStmts = filteredPromises.filter((stmt): stmt is LazyConversationStatement => Boolean(stmt));
        setDisplayedConvStmts(_humanStmts);

      }
    };
    updateDisplStmts();
  }, [conversationStatements	]);
    
  useEffect(() => {
    setDisplayedConvStmts([]);
    refreshConvStmts();
  }, [searchText, startDate, endDate]);

  const groupConvStmtsByDate = (stmts: LazyConversationStatement[]) => {
    return stmts.reduce((groups: {[date: string]: LazyConversationStatement[]}, stmt: LazyConversationStatement) => {
        const date = new Date(stmt.DateTime).toDateString(); 
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(stmt);
        return groups;
    }, {});
  }
  
  const renderGroupedConvStmts = (groupedStmts: {[date: string]: LazyConversationStatement[]}) => {
      let dates = Object.keys(groupedStmts);
      console.log("renderGroupedRecordings: " + dates.length);
      
      // Sort dates in descending order
      dates = dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

      return dates.map((date: string, index: number) => (
          <div key={index}>
              <div className="divider top-0 bg-gradient-radial from-gray-100 to-transparent font-semibold">
                {date}
              </div>

              {groupedStmts[date].map((stmt: LazyConversationStatement, msgIndex: number) => (
                  <Transcription key={stmt.id} convStmt={stmt} />
              ))}
          </div>
      ));
  }

 // const groupedMessages = groupMessagesByDate(transformedMessages.slice(0, maxMessages));
 const groupedConvStmts = groupConvStmtsByDate(displayedConvStmts);

  return (
    <div className="collapse bg-gray-400">
        <input type="checkbox"/> 
        <div className="collapse-title text-xl font-medium"> 
            <span>Supplier </span>
            <div className="badge badge-info">{displayedConvStmts.filter((stmt) => !stmt.Done).length}</div>
        </div>            
        <div className="collapse-content bg-gray-300"> 
            <div className="overflow-y-auto">
            {renderGroupedConvStmts(groupedConvStmts)}
            </div>
        </div>
    </div>

  );
}

export default Transcriptions;
