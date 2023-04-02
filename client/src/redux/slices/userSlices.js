import { createSlice } from '@reduxjs/toolkit'

import Avatar from "../../assets/img/logo.png"

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      { name: 'ssttek', userId: 'bot', isOnline: true, lastActive: 'Mar 3', profileImg: Avatar, color: '#FFFFFF', lastMessage: 'Living the dream' },
      { name: 'Brandon Andrews', userId: 'brandon', isOnline: false, lastActive: '3 hours ago', profileImg:"", color: '#DD95BA', lastMessage: 'Hello there!' },
      { name: 'Clayton Day', userId: 'clayton', isOnline: false, lastActive: 'Yesterday', profileImg:"", color: '#62D5D1', lastMessage: 'Yes of course. Thanks' },
      { name: 'Bernice Clark', userId: 'bernice', isOnline: true, lastActive: 'Jul 29', profileImg:"", color: '#82D39F', lastMessage: 'This is a question regarding the' },
      { name: 'Christine Fields', userId: 'christine', isOnline: true, lastActive: 'Jul 28', profileImg:"", color: '#FFBB75', lastMessage: 'Do you need help with the price? Do you' },
      { name: 'Mike Morgan', userId: 'mike', isOnline: false, lastActive: 'Jul 27', profileImg:"", color: '#F47E64', lastMessage: 'Choose the perfect accommodation and' },
      { name: 'Callie Schmidt', userId: 'callie', isOnline: false, lastActive: 'Jul 23', profileImg:"", color: '#F57971', lastMessage: 'Yes thanks!' },
      { name: 'Herbert Watkins', userId: 'herbert', isOnline: false, lastActive: 'Jul 23', profileImg:"", color: '#B967B9', lastMessage: 'Of course, send as an email to' },
      { name: 'Bessie Coleman', userId: 'bessie', isOnline: false, lastActive: 'Jul 23', profileImg:"", color: '#4DB8EF', lastMessage: 'Sorry you couldn\'t read it' },
      { name: 'Lottie Jordan', userId: 'lottie', isOnline: false, lastActive: 'Jul 23', profileImg:"", color: '#62D5D1', lastMessage: '728 Feeney Street.' },
      { name: 'Augusta Castillo', userId: 'augusta', isOnline: false, lastActive: 'Jul 23', profileImg:"", color: '#82D39F', lastMessage: 'I got the transfer! :D' },
    ],
  },
  reducers: {
    selectUser: (state, action) => {
      console.log("selectUser", action.payload);
    },
  },
})

export const { selectUser } = usersSlice.actions

export default usersSlice.reducer
