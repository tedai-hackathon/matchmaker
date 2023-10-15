// MinMaxIcon.tsx
import React from 'react';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

interface MinMaxIconProps {
  position: 'left' | 'right';
  onMinMax: () => void;
  className?: string;
}

const MinMaxIcon: React.FC<MinMaxIconProps> = ({ position, onMinMax, className }) => {
  return (
    <label className={`swap swap-flip w-4 h-4 ml-2 self-start ${className}`}>
      <input type="checkbox"  
        onChange={() => {}} // To silence the warning about controlled components, this is a no-op
        onClick={(e) => {
            e.stopPropagation(); // Prevent event propagation
            onMinMax();
      }}/>
      {(position === 'left') ? (
        <>
          <FaAngleDoubleRight className="swap-off fill-current text-gray-600 w-4 h-4" />
          <FaAngleDoubleLeft className="swap-on fill-current text-gray-600 w-4 h-4" />
        </>
      ) : (
        <>
          <FaAngleDoubleLeft className="swap-off fill-current text-gray-600 w-4 h-4" />
          <FaAngleDoubleRight className="swap-on fill-current text-gray-600 w-4 h-4" />
        </>
      )}
    </label>
  );
}

export default MinMaxIcon;
