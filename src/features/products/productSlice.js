//state management, setting up reducer
import { createSlice } from '@reduxjs/toolkit'
import { data as listOfCategory } from '../../components/storeFront/data';


const initialState = {
  category: '',
  listOfCategory
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    categorySelection(state, action) {
      // console.log('hey im in the action payload in products', action.payload);
      state.category = action.payload;
      state.listOfCategory = state.category === 'all' ? listOfCategory : listOfCategory.filter((selectedCategory) => selectedCategory.category === state.category);
    }
  }
});

export const { categorySelection } = productSlice.actions;

export default productSlice.reducer;
