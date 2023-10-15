import React from 'react';
import Image from 'next/image';

interface MenuElementProps {
  name?: string;
  href?: string;
  className?: string;
  symbolSrc?: string;
  icon?: React.ReactNode;
}

const MenuLink: React.FC<MenuElementProps> = ({
  name,
  href,
  className,
  symbolSrc,
  icon,
}) => {
  const defaultClassName = 'flex justify-between items-center px-4 py-2 text-black hover:bg-gray-200';
  
  return (
    <a
      href={href}
      className={className || defaultClassName}
    >
      <span>{name}</span>
      {symbolSrc && (
        <Image
          src={symbolSrc}
          alt=""
          className="ml-3 h-5 w-5 flex-shrink-0 md:h-6 md:w-6 lg:h-8 lg:w-8"
        />
      )}
      {icon && <span className="ml-2">{icon}</span>}
    </a>
  );
}

export default MenuLink;
