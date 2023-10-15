import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { PiRecordFill, PiRecordLight } from 'react-icons/pi';

interface Props {
  onRecord: (state: boolean) => void;
  onSwitchToText: () => void;
  state?: boolean;
  className?: string;  
  children?: React.ReactNode;
}

const RecorderIcon: React.FC<Props> = ({  
  onRecord, 
  onSwitchToText, 
  state = false, 
  className,
  children }) => {
    const touchStartTime = useRef<number>(0);
    const touchDuration = useRef<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

    const handleTouchEvent = (duration: number) => {
      if (duration > 500) {
          onSwitchToText();
          handleTouchEnd();
      }
    }

    const handleTouchStart = (event: React.TouchEvent<HTMLInputElement>) => {
      if (!event.currentTarget.checked) {
        touchStartTime.current = Date.now();

        // Start interval to periodically update touchDuration
        const id = setInterval(() => {
            touchDuration.current = Date.now() - touchStartTime.current;
            handleTouchEvent(touchDuration.current);
          }, 100);

        setIntervalId(id);
      }
    };

    const handleTouchEnd = () => {
      touchStartTime.current = 0;
      touchDuration.current = 0;

      if(intervalId){
        clearInterval(intervalId);
      }
      setIntervalId(null);
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
      if (!event.currentTarget.checked) {
        touchStartTime.current = Date.now();
        // Start interval to periodically update touchDuration
        const id = setInterval(() => {
            touchDuration.current = Date.now() - touchStartTime.current;
            handleTouchEvent(touchDuration.current);
          }, 100);

        setIntervalId(id);
      }
    };

    const handleMouseUp = () => {
      handleTouchEnd();
    };


    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    return (
      <div onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
          >
        <label className={`swap ${className}`}>
        {children}
        <input type="checkbox"  
          onChange={() => {}} // To silence the warning about controlled components, this is a no-op
          onClick={(e: React.MouseEvent<HTMLInputElement> ) => {
              onRecord(e.currentTarget.checked);
          }}
          checked={state}
        />

        <PiRecordFill className={`swap-on fill-current text-red-600 w-28 h-28 ${className}`} />
        <PiRecordLight className={`swap-off fill-current text-red-600 w-28 h-28 ${className}`} />
      </label>
      
      
      </div>
    );
}

export default RecorderIcon;
