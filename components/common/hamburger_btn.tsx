import React, { useState } from 'react';

const SidebarToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<button
    className="min-w-[60px] max-w-[160px] min-h-[50px] max-h-[140px] w-24 h-20 lg:w-32 lg:h-28 flex flex-col justify-center items-center relative"
    onClick={() => setIsOpen(!isOpen)}
>
    <div
        className={`w-12 lg:w-26 h-1 lg:h-2 bg-black transition-all duration-300 transform origin-center ${isOpen ? 'rotate-45 translate-y-[0.360rem]' : '-translate-y-2.5'}`}
    ></div>
    <div
        className={`w-12 lg:w-26 h-1 lg:h-2 bg-black transition-all duration-300 transform origin-center ${isOpen ? '-rotate-45' : ''}`}
    ></div>
    <div
        className={`w-12 lg:w-26 h-1 lg:h-2 bg-black transition-all duration-300 transform origin-center ${isOpen ? 'opacity-0' : 'translate-y-2.5'}`}
    ></div>
</button>
  );
};

export default SidebarToggle;
