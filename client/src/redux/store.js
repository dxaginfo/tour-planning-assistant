import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import toursReducer from './slices/toursSlice';
import venuesReducer from './slices/venuesSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tours: toursReducer,
    venues: venuesReducer,
    ui: uiReducer,
  },
});

export default store;
