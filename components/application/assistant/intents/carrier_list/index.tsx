import VetCaseComponent from './[carrier_entry]';
import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { LazyErkannteBehandlungsElemente as LazyVetCaseRecords } from '@/models';
import useCasesSubscription from '@/app_lib/hooks/use_vetcase_subscription';

interface Props {
  startDate?: Date;
  endDate?: Date;
  searchText?: string;
  offset?: number;
  pageSize?: number;
  children?: React.ReactNode;  // Add this line
}

const CasesList: React.FC<Props> = ({
  startDate,
  endDate,
  searchText,
  offset = 0,
  pageSize = 50,
  children }) => {
  const [displayedCases, setDisplayedVetCases] = useState<LazyVetCaseRecords[]>([]);
  
  const { vetCases, isSynced, refreshVetCases} = useCasesSubscription(pageSize, startDate, endDate, searchText);

  
  useEffect(() => {
    if( vetCases && vetCases.length > 0 ){
      setDisplayedVetCases(vetCases);
     }
  }, [vetCases]);

  useEffect(() => {
    setDisplayedVetCases([]);
    refreshVetCases();
  }, [searchText, startDate, endDate]);
 
  const groupCasesByDate = (vcases: LazyVetCaseRecords[]) => {
    return vcases.reduce((groups: {[date: string]: LazyVetCaseRecords[]}, vcase: LazyVetCaseRecords) => {
        const date = new Date(vcase.ErfassungsZeitpunkt).toDateString(); 
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(vcase);
        return groups;
    }, {});
  }
  
  const renderGroupedCases = (groupedCase: {[date: string]: LazyVetCaseRecords[]}) => {
      let dates = Object.keys(groupedCase);
      console.log("renderGroupedCases: " + dates.length);

      // Sort dates in descending order
      dates = dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

      return dates.map((date: string, index: number) => (
          <div key={index}>
              <div className="divider bg-gradient-radial from-green-100 to-transparent font-semibold">
                {date}
              </div>

              {groupedCase[date].map((vcase: LazyVetCaseRecords, behIdx: number) => (
                  <VetCaseComponent key={vcase.id} vetCase={vcase} />
              ))}
          </div>
      ));
  }

 // const groupedMessages = groupMessagesByDate(transformedMessages.slice(0, maxMessages));
 const groupedCases = groupCasesByDate(displayedCases);

  return (
    <div className="collapse bg-green-300">
        <input type="checkbox"/> 
        <div className="collapse-title text-xl font-medium"> 
            <span>Carrier</span>
            <div className="badge badge-info">{displayedCases?.filter((c) => !c.InPegassusErfasst || c.InPegassusErfasst == "").length}</div>
        </div>            
        <div className="collapse-content bg-green-200"> 
            <div className="flex flex-col w-[65%] sm:w-full smd:items-center sm:flex sm:justify-center">
            {renderGroupedCases(groupedCases)}
            </div>
        </div>
    </div>

  );
}

export default CasesList;
