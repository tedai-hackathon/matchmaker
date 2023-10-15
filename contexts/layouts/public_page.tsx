import React from 'react';
import Navbar from '@/components/application/navbar/navbar';
import Footer from '@/components/application/footer/footer';

interface LayoutProps {
  children: React.ReactNode;
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
}

const PublicPageLayout: React.FC<LayoutProps> = ({ 
  children, 
  navbar,
  footer = <Footer />
}) => {
  return (
    <div className="flex flex-col h-screen-real w-screen">
      {navbar}

      <div className="flex flex-grow overflow-hidden"> 
        {children} 
      </div>

      {footer}
    </div>
  );
}
export default PublicPageLayout;
