import React, { useState } from 'react';
import Conversations from './conversations';
import ConversationSummary from './conversations/[conversation_summary]';
import Intent from './intents/[intent]';
import Intents from './intents';
import Chat from './chat';
import ChatBubble from './chat/chat_bubble';
import OportunityMap from './oportunities';

const Assistant: React.FC = () => {
  const [leftExpanded, setLeftExpanded] = useState(false); // Initial 30%
  const [rightExpanded, setRightExpanded] = useState(false); // Initial 0%

  const [leftClosed, setLeftClosed] = useState(true);
  const [rightClosed, setRightClosed] = useState(true);

  return (
      <div className="flex flex-grow max-h-screen">

            {<Intents
                  position="left"
                  expanded={leftExpanded}
                  closed={leftClosed}
                  onToggle={()=>{setLeftClosed(!leftClosed)}}
                  onMinMax={()=>{setLeftExpanded(!leftExpanded)}}>
            </Intents>}
            
            <OportunityMap 
            leftClosed={leftClosed}
            onLeftToggle={()=>{setLeftClosed(!leftClosed)}}
            rightClosed={rightClosed}
            onRightToggle={()=>{setRightClosed(!rightClosed)}}
            />
            
            {<Chat
                  position="right"
                  expanded={rightExpanded}
                  closed={rightClosed}
                  onToggle={()=>{setRightClosed(!rightClosed)}}
                  onMinMax={()=>{setRightExpanded(!rightExpanded)}}>
            </Chat>}

      </div>
    );
}

export default Assistant;
