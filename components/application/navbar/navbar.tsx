// components/Header.tsx
import React, { useContext } from 'react';
import SideBarToggle from '@/components/common/hamburger_btn'; // Assuming you have this component
import Logo from '@/components/application/navbar/logo';                     // Assuming you have this component
import NoticeBell from '@/components/application/navbar/notice_bell';         // Assuming you have this component
import SilenceSwitchButton from '@/components/application/navbar/silence_switch';
import UserProfileMenu from '@/components/application/navbar/user_profile_menu/user_profile_menu'; // Assuming you have this component
import { AudioStateContext } from '@/contexts/audio_context';
import AudioOnOffIconSwap from '@/components/common/audio_on_off_swap';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = ({className}) => {
  const audioContext = useContext(AudioStateContext);

  if (!audioContext) {
    throw new Error("audioState context must be used within a AudioStateProvider");
  }
  
  const { state: audioState, setState  } = audioContext;

  return (
    <div className={`navbar bg-base-100 justify-between ${className}`}>
      <Logo className="w-4 md:w-16 z-auto"/>
      {/* <AudioOnOffIconSwap onChange={setState} initialState={audioContext.state}/> */}
      {/* Nice stylish Button to open Demands View */}
      <div className="join">
        <input className="join-item btn font-extrabold text-lg" type="radio" name="options" aria-label="Oportunity"/>
        <input className="join-item btn font-extrabold text-lg" type="radio" name="options" aria-label="Demand" />
        <input className="join-item btn font-extrabold text-lg" type="radio" name="options" aria-label="Offer" />
    </div>
      <UserProfileMenu className="z-auto" />
    </div>    
  );
};

export default Navbar;
