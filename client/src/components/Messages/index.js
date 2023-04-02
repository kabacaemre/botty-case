import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import MessageList from "./MessageList";
import Typing from "./Typing";
import Footer from "./Footer";

import { addMessage } from "../../redux/slices/messageSlices";

import "./Messages.scss";

function Messages({ socket, isTyping }) {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messages);

  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    const messageText = message.trim();
    if (messageText && socket.connected) {
      await socket.emit("user-message", messageText);
      dispatch(addMessage({ message, messageType: 2 }));
      setMessage("");
    }
  };

  const onChangeMessage = (event) => {
    if (event) {
      setMessage(event.target.value);
    }
  };

  return (
    <div className="messages">
      <Header />
      <MessageList messages={messages} />
      {isTyping && <Typing />}
      <Footer
        message={message}
        sendMessage={sendMessage}
        onChangeMessage={onChangeMessage}
      />
    </div>
  );
}

export default Messages;
