import React from 'react';

import Message from '../../../common/components/Message';

import './MessageList.scss';

function MessageList({ messages }) {
  return (
    <div className="messages__list">
      {messages && (
        <>
          {messages.map((msg, i) => {
            return <Message key={i} {...msg} />;
          })}
        </>
      )}
    </div>
  );
}

export default MessageList;
