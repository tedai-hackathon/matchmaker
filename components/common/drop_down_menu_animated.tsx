import React, { useRef, useState, useEffect } from 'react';
import AnimatedImgButton from '@/components/common/animated_img_button';

interface DropdownMenuProps {
  imageSrc: string;
  animate?: boolean;
  className?: string;
  imgClassName?: string;
  buttonClassName?: string;
  menuClassName?: string;
  transitionSpeed?: number;
  translationAmount?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  imageSrc,
  animate = true,
  transitionSpeed = 0.3,
  translationAmount = '1em',
  children,
  className,
  imgClassName,
  buttonClassName,
  menuClassName
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Close the menu when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const defaultMenuElemClassName = 'flex justify-between items-center px-4 py-2 text-black hover:bg-gray-200';

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative z-auto ${className}`} ref={dropdownRef}>
      <AnimatedImgButton
        src={imageSrc}
        animate={animate}
        duration={1} // in seconds
        onClick={handleImageClick}
        imgClassName={imgClassName}
        className={buttonClassName}
      />        

    {isOpen && 
      <div style={{
          overflow: 'hidden',
          maxHeight: isOpen ? 'max-height' : '0',
          transition: `max-height ${transitionSpeed}s ease-in-out, transform ${transitionSpeed}s ease-in-out, opacity ${transitionSpeed}s ease-in-out`,
          transform: isOpen ? 'translateY(0)' : `translateY(${translationAmount})`,
          opacity: isOpen ? '1' : '0'
          }}
          className={`absolute right-0 top-full mt-2 w-auto max-w-xl bg-white border border-gray-200 rounded shadow-lg z-auto ${menuClassName}`}>
        
        {children}

      </div>
    }
    </div>
  );
};