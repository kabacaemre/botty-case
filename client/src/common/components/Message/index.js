import React from "react";

import "./Message.scss";

function Message({ message, messageType }) {
  return (
    <div
      className={`message-list__message ${
        messageType === 2
          ? "message-list__message-right"
          : ""
      }`}
    >
      <span>{message}</span>
    </div>
  );
}

export default Message;
