//state management, setting up reducer
import { createSlice } from '@reduxjs/toolkit'
import { data as listOfCategory } from '../../components/storeFront/data';


const initialState = {
  cartItems: [],
  itemsInCart: 0,
  cartTotalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //these functions will update our state
    categorySelection(state, action) {
      //action.payload is targeting the item
      state.category = action.payload;
      state.listOfCategory = state.category === 'all' ? listOfCategory : listOfCategory.filter((selectedCategory) => selectedCategory.category === state.category);
    },
    addToCartItems(state, action) {
      console.log('Hey ACTION: ', action.payload);
      //call addToCartItems from product.js
      state.cartItems.push(action.payload);
      //state keyword is targeting lines 7-9
      state.itemsInCart = state.cartItems.length;

    },
  }
});
//this allows us to use the cartSlice in another file.
export const { categorySelection, addToCartItems } = cartSlice.actions;


export default cartSlice.reducer;
