import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

interface MenuElementProps {
  name?: string;
  details?: string;
  onClick?: () => void;
  className?: string;
  symbolSrc?: string;
  icon?: React.ReactNode;
}

const MenuButton: React.FC<MenuElementProps> = ({
  name,
  details,
  onClick,
  className,
  symbolSrc,
  icon,
}) => {
  const defaultClassName = 'flex justify-between items-center px-4 py-2 text-black hover:bg-gray-200';
  
  return (
    <button 
      onClick={onClick}
      className={className || defaultClassName}
    >
      <div className="flex flex-col items-start">
        <span>{name}</span>
        {details && <p className="text-xs">{details}</p>}
      </div>
      {symbolSrc && (
        <Image
          src={symbolSrc}
          alt=""
          className="ml-3 h-5 w-5 flex-shrink-0 md:h-6 md:w-6 lg:h-8 lg:w-8"
        />
      )}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

export default MenuButton;
