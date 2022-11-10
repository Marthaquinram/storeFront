import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import reducers and register them on line 6

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
