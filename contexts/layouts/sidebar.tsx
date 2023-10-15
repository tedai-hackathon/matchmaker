import React from 'react';
import ToggleIcon from '@/components/common/toggle_icon_swap';
import MinMaxIcon from '@/components/common/min_max_expand_swap';

interface SideBarProps {
  position: 'left' | 'right';
  expanded: boolean;
  closed: boolean;
  onToggle: () => void;
  onMinMax: () => void;
  children?: React.ReactNode;
  className?: string;
}

const SideBar: React.FC<SideBarProps> = ({
  position, expanded, closed, onToggle, onMinMax, children, className
}) => {
  
  return (
    <div 
      className={`
        ${closed? 'hidden' : ''}
        ${expanded? 'w-full' : 'w-full md:w-1/2' }
        absolute h-full z-40 opacity-98 
        md:relative md:h-full md:opacity-100
        bg-gray-100
       ${className}`}
    >
      <div className={`flex p-2 justify-between items-start`}>
        {position === 'left' && <ToggleIcon onToggle={onToggle} isOn={true}/>}
        {!closed && <MinMaxIcon className="invisible md:visible" position={position} onMinMax={onMinMax} />}
        {position === 'right' && <ToggleIcon onToggle={onToggle} isOn={true}/>}
      </div>
      {!closed && children}
    </div>
  );
}


export default SideBar;
