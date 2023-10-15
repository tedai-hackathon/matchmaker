import { createContext, useContext, useState } from "react";

interface AudioStateType {
  state: boolean;
  setState: (state: boolean) => void;
}

export const AudioStateContext = createContext<AudioStateType | undefined>(undefined);

interface AudioStateProviderProps {
    children: React.ReactNode;
  }

export const AudioStateProvider:  React.FC<AudioStateProviderProps> = ({ children }) => {
    const [state, setAudioState] = useState<boolean>(false);
  
    const setState = (state: boolean) => {
        setAudioState(state);
        console.log("Audio state is now: " + state);
    };
  
    return (
      <AudioStateContext.Provider value={{ state, setState }}>
        {children}
      </AudioStateContext.Provider>
    );
};