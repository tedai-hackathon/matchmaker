import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { AudioStateContext } from '@/contexts/audio_context';

export const useControlledAudio = () => {
    const audioRef = useRef(new Audio());
    const audioState = useContext(AudioStateContext);

    useEffect(() => {
        if (!audioState?.state) {
            audioRef.current.pause();
        }

        // Cleanup - pause audio when component is unmounted
        return () => {
            audioRef.current.pause();
        };
    }, [audioState]);

    const setAudioSrc = (src: string) => {
        audioRef.current.src = src;
    };

    return {
        play: () => audioRef.current.play(),
        pause: () => audioRef.current.pause(),
        setSrc: setAudioSrc,
        state: audioState?.state
    };  
};
