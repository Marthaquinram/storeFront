// render all products
import React from 'react'
import { Box, Typography, Card, CardMedia } from '@mui/material'
import { useSelector } from 'react-redux';
// CardActions, CardContent


function Products() {
  const products = useSelector(state => state.products.listOfCategory);
  let results = [];
  console.log('current state in products', results);
  if (products.length > 0) {
    //do something
    results = products.map(items =>
    (<Card>
      <CardMedia image={items.image} sx={{ height: '180px', width: '180px', borderRadius: '4px' }} />
      <Box>
        <Typography>
          {items.name}
          {items.price}
          {items.inventory}

        </Typography>

      </Box>

    </Card>

    ))
  }
  return (
    <>
      {results}
    </>
    // this will display on page
  )
}

export default Products;
