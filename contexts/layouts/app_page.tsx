import React, { useEffect } from 'react';
import { Hub } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import Navbar from '@/components/application/navbar/navbar';
import Footer from '@/components/application/footer/footer';
import { AudioStateProvider } from '@/contexts/audio_context';

interface LayoutProps {
  children: React.ReactNode;
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
}

const AppPageLayout: React.FC<LayoutProps> = ({ 
  children, 
  navbar = <Navbar className='h-10 z-50' />,
  footer
}) => {
  useEffect(() => {
    const listener = Hub.listen('auth', ({ payload: { event } }) => {
      if (event === 'signOut') {
        DataStore.clear();
      }

      if (event === 'signIn') {
        DataStore.start();
      }

    });

    return () => Hub.remove('auth', listener);
  }, []);

  return (
    <AudioStateProvider >
    <div className="flex flex-col h-screen-real w-screen">
      {navbar}

      <div className="flex flex-grow overflow-hidden"> 
        {children} 
      </div>

      {footer}
    </div>
    </AudioStateProvider>
  );
}

export default AppPageLayout;
