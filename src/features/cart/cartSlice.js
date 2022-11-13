//state management, setting up reducer
import { createSlice } from '@reduxjs/toolkit'
import { data as listOfCategory } from '../../storeFront/data';


const initialState = {
  itemsInCart: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    categorySelection(state, action) {

      state.category = action.payload;
      state.listOfCategory = state.category === 'all' ? listOfCategory : listOfCategory.filter((selectedCategory) => selectedCategory.category === state.category);
    }
  }
});

export const { categorySelection } = productSlice.actions;

export default productSlice.reducer;
