import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';

// import reducers and register them on line 6

export const store = configureStore({
  reducer: {
    products: productReducer,
    // cart: cartReducer,
    //deatil: deatilReducer
  },
});
export default store;
