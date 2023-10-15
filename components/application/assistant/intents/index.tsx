import React from 'react';
import SideBar from '@/contexts/layouts/sidebar'; // Adjust the path based on your directory structure
import Datepicker from "react-tailwindcss-datepicker"; 

import Transcriptions from './supllier_list';
import { Trans } from 'react-i18next';
import { DateType, DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import OpportunityList from './oportunity_list';
import VetCasesList from './carrier_list';

interface Props {
  position: 'left' | 'right';
  expanded: boolean;
  closed: boolean;
  onToggle: () => void;
  onMinMax: () => void;
  children?: React.ReactNode;  // Add this line
}

const Intents: React.FC<Props> = ({position, expanded, closed, onToggle, onMinMax, children }) => {
  const [dateRange, setDateRange] = React.useState<DateValueType>();
  const [searchText, setSearchText] = React.useState<string>('');

  function toDate(val: DateType | undefined){
    if(!val || !val.toString()) return undefined;
    return new Date(val.toString());
  }

  function getStartDate(){
    if(!dateRange) return undefined;
    let date = toDate(dateRange.startDate);
    date?.setHours(0,0,0,0);
    return date;
  }

  function getEndDate(){
    if(!dateRange) return undefined;
    let date = toDate(dateRange.endDate);
    date?.setHours(23,59,59,999);
    return date;
  }

  return (
    <SideBar 
      position={position} 
      expanded={expanded} 
      closed={closed}
      onToggle={onToggle}
      onMinMax={onMinMax}
      className="overflow-y-auto h-full"
    >
      <div className="flex flex-row w-full items-center gap-4 pb-2 px-4">
        <Datepicker 
          value={dateRange || null} 
          onChange={
            function (value: DateValueType, e?: HTMLInputElement | null | undefined): void {
              setDateRange(value);
            } 
          } 
          popoverDirection='down'
          /> 
        <input type="text" placeholder="Search text" className="input w-full max-w-xs h-10"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
         />
      </div>

      <div className='flex flex-col gap-2 px-4'>
        <OpportunityList startDate={getStartDate()} endDate={getEndDate()} searchText={searchText}/>

        {/* <VetCasesList startDate={getStartDate()} endDate={getEndDate()} searchText={searchText}/>

        <Transcriptions startDate={getStartDate()} endDate={getEndDate()} searchText={searchText} /> */}
      </div>
    </SideBar>
  );
}

export default Intents;
