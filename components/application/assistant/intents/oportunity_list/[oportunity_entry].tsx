import DoneIcon from '@/components/common/done_swap';
import { ConversationStatement, LazyConversationStatement, LazyReminder, Reminder } from '@/models';
import React, { useEffect } from 'react';
import { Storage } from 'aws-amplify';
import { deleteReminder, updateReminder } from '@/app_lib/services/reminder_service';
import { updateConversationStatement } from '@/app_lib/services/conversation_statement_service';


interface Props {
  country_a: string;
  country_b: string;
  balance: number;
  className?: string; // Add this line
}

const OpportunityComponent: React.FC<Props> = ({ 
  country_a,
  country_b,
  balance,
  className
}) => {



  function toTime(AWSDateTime: string) {
    const date = new Date(AWSDateTime);
    return `${date.getHours()}:${date.getMinutes()}`    
  }

  return (
    
    <div className="flex flex-row items-center pb-4">
        <div className={`collapse  bg-blue-500 w-11/12 ${className}`} onClick={(e) => {e.stopPropagation();}}>
            <input type="checkbox" /> 
            <div className="collapse-title h-1 text-slate-50
                            flex justify-between">
                <div className='text-base font-medium w-full block truncate'>{country_a} to {country_b}</div>
                {/* <div className='text-sm'>{toTime(reminder.Termin)}</div> */}
            </div>
            <div className="collapse-content bg-blue-400"> 
               <p>Imbalance: {balance}</p>
                {/* <audio controls  src={audioUrl}/> */}
                <div className="divider"></div>
                <p>Maersk [book]</p>
                <p>ONE [book]</p>
                <p>Hapag-Lloyd [book]</p>

                {/* <div className="button bg-red-600 p-1 rounded-md text-xs cursor-pointer w-fit" onClick={onDelete}>DEL</div> */}
          </div>    
        </div>    

    </div>

  );
}

export default OpportunityComponent;

