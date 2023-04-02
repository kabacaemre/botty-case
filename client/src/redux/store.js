import { configureStore } from '@reduxjs/toolkit';

// Reducers
import usersSlice from './slices/userSlices';
import messagesSlice from './slices/messageSlices';

export default configureStore({
  reducer: {
    messages: messagesSlice,
    users: usersSlice,
  },
});
