// contexts/OnlineContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

const IsOnline = createContext<boolean | undefined>(undefined);

export function useOnlineStatus() {
  return useContext(IsOnline);
}

export function IsOnlineProvider({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [intervalIdState, setIntervalId] = useState<NodeJS.Timer>();

    useEffect(() => {
        if(intervalIdState) clearInterval(intervalIdState);
        setIntervalId(undefined);
        const checkInterval = isOnline ? 10000 : 1000;
        const intervalId = setInterval(() => {
            checkInternetConnection()
                .then(result => setIsOnline(result))
                .catch(() => setIsOnline(false));
        }, checkInterval);
        setIntervalId(intervalId);
        // Clean up function to clear the interval when component unmounts
        return () => {
            clearInterval(intervalId);
            setIntervalId(undefined);
            }
    }, [isOnline]);

  return (
    <IsOnline.Provider value={isOnline}>
      {children}
    </IsOnline.Provider>
  );
}

async function checkInternetConnection(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 500);

    /*const response1 = await fetch('/api/heartbeat', {
      signal: controller.signal
    });*/
    const response2 = await fetch('https://dns.google/resolve?name=www.google.com', {
      signal: controller.signal
    });    
    clearTimeout(id);
    return /*response1.ok &&*/ response2.ok;
  } catch (err) {
    console.error(err);
    return false;
  }
}
