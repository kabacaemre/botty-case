import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [
      { message: 'Hi! My name’s Botty.', messageType: 1 },
      { message: 'Hi Botty! How are you?', messageType: 2 },
      { message: 'Living the dream', messageType: 1 },
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
