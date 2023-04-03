import React from 'react';

import './Footer.scss';

const RETURN_KEY_CODE = 13;

function Footer({ message, sendMessage, onChangeMessage }) {
  const onKeyDown = ({ keyCode }) => {
    if (keyCode !== RETURN_KEY_CODE) {
      return;
    }
    sendMessage();
  };

  return (
    <div className="messages__footer">
      <input
        type="text"
        name="message"
        placeholder="Write a message..."
        onKeyDown={onKeyDown}
        onChange={onChangeMessage}
        value={message}
      />
      <div className="messages__footer__actions">
        {/* <button disabled={!message}>
          <i className="far fa-smile" />
        </button> */}
        <button onClick={sendMessage} disabled={!message}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Footer;
