//state management, setting up reducer
import { createSlice } from '@reduxjs/toolkit'
// import { data as listOfCategory } from '../../components/storeFront/data';
import Chance from 'chance';
const chance = new Chance();


const initialState = {
  cartItems: [],
  itemsInCart: 0,
  cartTotalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartItems(state, action) {
      const item = {
        id: chance.bb_pin(),
        name: action.payload.name,
        description: action.payload.description,
        category: action.payload.category,
        price: action.payload.price,
        inventory: action.payload.inventory,
        image: action.payload.image
      }
      //call addToCartItems from product.js
      state.cartItems.push(item);
      // console.log('Hey ACTION: ', action.payload);
      //state keyword is targeting lines 7-9
      state.itemsInCart = state.cartItems.length;
    },
    deleteFromCartItems(state, action) {
      let itemDelete = action.payload.id;
      state.cartItems = state.cartItems.filter(itemId => itemId.id !== itemDelete)
      state.itemsInCart = state.cartItems.length;
    }
  }
});
//this allows us to use the cartSlice in another file.
export const { categorySelection, addToCartItems } = cartSlice.actions;


export default cartSlice.reducer;
