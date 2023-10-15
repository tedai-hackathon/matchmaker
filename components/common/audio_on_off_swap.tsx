// MinMaxIcon.tsx
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';
import React from 'react';
import { PiSpeakerHighBold, PiSpeakerSimpleXBold  } from 'react-icons/pi';

interface Props {
  onChange: (state: boolean) => void;
  initialState?: boolean;
  className?: string;
}

const AudioOnOffIconSwap: React.FC<Props> = ({  onChange, initialState, className }) => {
  return (
    <label className={`swap ${className}`}>
      <input type="checkbox"  
        onChange={() => {}} // To silence the warning about controlled components, this is a no-op
        onClick={(e) => {
            e.stopPropagation(); // Prevent event propagation
            onChange(e.currentTarget.checked);
        }}
        checked={initialState}
      />

      <PiSpeakerSimpleXBold className={`swap-off fill-current text-gray-600 w-8 h-8 ${className}`} />
      <PiSpeakerHighBold className={`swap-on fill-current text-blue-600 w-8 h-8 ${className}`} />
    </label>
  );
}

export default AudioOnOffIconSwap;
