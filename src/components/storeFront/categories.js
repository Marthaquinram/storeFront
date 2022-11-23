import React, { useState } from 'react'
import { Box, Tabs, Typography, Tab } from '@mui/material'
import { categoryTabs } from './data';
import { useDispatch } from 'react-redux';
import { productSlice } from '../../features/products/productSlice';


// A < Categories > component
// Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it


function Categories() {
  const [activeTab, setActiveTab] = useState('all');
  const dispatch = useDispatch();

  const handleSelection = (event, value) => {
    setActiveTab(value);
    console.log('Hey Im the ACTIVETAB: ', activeTab)
    dispatch(productSlice.actions.categorySelection(value));
  }

  return (
    <Box>
      <Typography> Browse our Categories</Typography>
      <Tabs onChange={handleSelection} value={activeTab}>

        {categoryTabs.map((items, index) => (
          <Tab key={index} label={items.title} value={items.value} />
        ))}
      </Tabs>
    </Box>
  )
}

export default Categories;
