import React from 'react';

interface Props {
  title: string;
  lastMessage: string;
  timestamp: Date;
}

const Intent: React.FC<Props> = ({ title, lastMessage, timestamp }) => {
  return (
    <div className="conversation-summary">
      <h3>{title}</h3>
      <p>{lastMessage}</p>
      <span>{timestamp.toLocaleTimeString()}</span>
    </div>
  );
}

export default Intent;
