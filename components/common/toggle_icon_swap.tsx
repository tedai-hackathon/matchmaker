// ToggleIcon.tsx
import React from 'react';

interface ToggleIconProps {
  onToggle: () => void;
  isOn: boolean;  // new prop
  className?: string;
}

const ToggleIcon: React.FC<ToggleIconProps> = ({ onToggle, isOn, className="h-8 w-8" }) => {
  return (
    <label className={`swap swap-rotate ${className}`}>
      <input 
        type="checkbox" 
        checked={isOn} // set the initial checked state
        onChange={() => {}} // To silence the warning about controlled components, this is a no-op
        onClick={(e) => {
          e.stopPropagation(); // Prevent event propagation
          onToggle();
        }}
      />
      <svg className="swap-off fill-current h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>
      <svg className="swap-on fill-current h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  );
}

export default ToggleIcon;
