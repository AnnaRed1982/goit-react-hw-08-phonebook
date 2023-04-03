import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './auth/contactsSlice';
import { filterReducer } from './auth/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
