import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";

import UserList from "../../components/UserList";
import Messages from "../../components/Messages";
import ContactPanel from "../../components/ContactPanel";

import { addMessage } from "../../redux/slices/messageSlices";

import "./HomeLayout.scss";

const socket = io("http://localhost:4001/", {
  transports: ["websocket", "polling", "flashsocket"],
});

function HomeLayout() {
  const dispatch = useDispatch();

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (socket) {
      socket.on("bot-message", (message) => {
        dispatch(addMessage({ message, messageType: 1 }));
        setIsTyping(false);
      });

      socket.on("bot-typing", () => {
        setIsTyping(true);
      });
    }
  }, [socket]);

  return (
    <>
      {socket && (
        <div className="homeContent">
          <UserList />
          <Messages socket={socket} isTyping={isTyping} />
          <ContactPanel />
        </div>
      )}
    </>
  );
}

export default HomeLayout;
