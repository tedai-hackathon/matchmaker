import React from 'react';
import SideBar from '@/contexts/layouts/sidebar'; // Adjust the path based on your directory structure

interface ConversationsProps {
  position: 'left' | 'right';
  expanded: boolean;
  closed: boolean;
  onToggle: () => void;
  onMinMax: () => void;
  children?: React.ReactNode;  // Add this line
}

const Conversations: React.FC<ConversationsProps> = ({position, expanded, closed, onToggle, onMinMax, children }) => {
  return (
    <SideBar 
      position={position} 
      expanded={expanded} 
      closed={closed}
      onToggle={onToggle}
      onMinMax={onMinMax}
    >
      {children}
    </SideBar>
  );
}

export default Conversations;
