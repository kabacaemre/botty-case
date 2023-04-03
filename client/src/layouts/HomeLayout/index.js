import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import useSound from 'use-sound';

import UserList from '../../components/UserList';
import Messages from '../../components/Messages';
import ContactPanel from '../../components/ContactPanel';

import { addMessage } from '../../redux/slices/messageSlices';

import receiveSound from '../../assets/sound/receive.mp3';

import './HomeLayout.scss';

const socket = io('http://localhost:4001/', {
  transports: ['websocket', 'polling', 'flashsocket'],
});

function HomeLayout() {
  const dispatch = useDispatch();
  const [receivePlay] = useSound(receiveSound);

  const [isTyping, setIsTyping] = useState(false);
  const [soundPlay, setSoundPlay] = useState(false);

  useEffect(() => {
    if (socket) {
      socket.on('bot-message', (message) => {
        dispatch(addMessage({ message, messageType: 1 }));
        setIsTyping(false);
        setSoundPlay(true);
      });

      socket.on('bot-typing', () => {
        setIsTyping(true);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (soundPlay) {
      receivePlay();
      setSoundPlay(false);
    }
  }, [soundPlay]);

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
