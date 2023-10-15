import React from 'react';

interface ConversationSummaryProps {
  title: string;
  lastMessage: string;
  timestamp: Date;
}

const ConversationSummary: React.FC<ConversationSummaryProps> = ({ title, lastMessage, timestamp }) => {
  return (
    <div className="conversation-summary">
      <h3>{title}</h3>
      <p>{lastMessage}</p>
      <span>{timestamp.toLocaleTimeString()}</span>
    </div>
  );
}

export default ConversationSummary;
