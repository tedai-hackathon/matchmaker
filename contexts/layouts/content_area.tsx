 import React from 'react';

interface ContentAreaProps {
  className?: string;
  children?: React.ReactNode;  // Add this line
}

const ContentArea: React.FC<ContentAreaProps> = ({ 
    className = "",
  children 
}) => {
  return (
    <div className={`w-full bg-white ${className}`}>
        {children}
    </div>
    );
}

export default ContentArea;
