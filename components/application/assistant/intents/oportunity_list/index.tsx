import OpportunityComponent from './[oportunity_entry]';
import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { LazyReminder } from '@/models';
import useRemindersSubscription from '@/app_lib/hooks/use_reminder_subscription';

interface Props {
  startDate?: Date;
  endDate?: Date;
  searchText?: string;
  offset?: number;
  pageSize?: number;
  children?: React.ReactNode;  // Add this line
}

const OpportunityList: React.FC<Props> = ({
  startDate,
  endDate,
  searchText,
  offset = 0,
  pageSize = 50,
  children }) => {

  return (
    // <div className="collapse bg-blue-300">
    //     <input type="checkbox"/> 
    //     <div className="collapse-title text-xl font-medium"> 
    //         <span>Oportunities </span>
    //         <div className="badge badge-info">5</div>
    //     </div>            
    //     <div className="collapse-content bg-blue-200"> 
            <div className="overflow-y-auto">
            <div >
              <div className="divider bg-gradient-radial from-blue-100 to-transparent font-semibold">
                Today
              </div>
              <OpportunityComponent country_a='USA WEST' country_b='South Afrika' balance={1000} />
              <OpportunityComponent country_a='Country FROM' country_b='Country TO' balance={700} />
              <OpportunityComponent country_a='Country FROM' country_b='Country TO' balance={-200} />
              <OpportunityComponent country_a='Country FROM' country_b='Country TO' balance={-800} />
          </div>              
            </div>
    //     </div>
    // </div>

  );
}

export default OpportunityList;
