// MinMaxIcon.tsx
import React from 'react';
import { FaCheckCircle, FaPencilAlt  } from 'react-icons/fa';

interface Props {
  state: boolean;
  onChange: (state: boolean) => void;
  className?: string;
}

const DoneIcon: React.FC<Props> = ({  state = false, onChange, className }) => {
  return (
    <label className={`swap ${className}`}>
      <input type="checkbox"  
        onChange={() => {}} // To silence the warning about controlled components, this is a no-op
        onClick={(e) => {
            e.stopPropagation(); // Prevent event propagation
            onChange(e.currentTarget.checked);
      }} checked={state}/>

      <FaPencilAlt className={`swap-off fill-current text-red-500 w-28 h-28 ${className}`} />
      <FaCheckCircle className={`swap-on fill-current text-green-600 w-28 h-28 ${className}`} />
    </label>
  );
}

export default DoneIcon;
