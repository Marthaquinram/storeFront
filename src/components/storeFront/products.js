// render all products
import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, Button, CardContent, CardActions } from '@mui/material'
import { useSelector } from 'react-redux';
import { cartSlice } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';


// CardActions, CardContent

const styles = {
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '30px',
    flexWrap: 'wrap'
  },
  card: {
    width: '15%',
    margin: '15px 30px',
    minWidth: '200px',
    boxShadow: '5px 5px 20px #e28743',
    padding: '10px',
  },
  CardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  CardButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
}

// A < Products > component

// Displays a list of products associated with the selected category

function Products() {
  const dispatch = useDispatch();
  //dispatch is used when you want to update the state (initial state object)
  function addItemToCart(item) {
    console.log('Hey this is ITEM added to Cart: ', item);
    //disptach is targeting the functions we make inside of slices.
    dispatch(cartSlice.actions.addToCartItems(item))
  }
  // this is selecting the piece of state from the prodSlice, and grabbing the listOfCategory state
  const products = useSelector(state => state.products.listOfCategory);
  let results = [];
  // console.log('current state in products', results);
  if (products.length > 0) {
    results = products.map((items, index) =>
      <Card key={index} sx={styles.card}>
        <CardMedia image={items.image} sx={{ height: '150px', borderRadius: '4px' }} />
        <CardContent sx={styles.CardContent}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography align='center'>
              {items.name}
            </Typography>
            <Typography variant='h9' align='center'>
              Price: ${items.price}
            </Typography>
            <Typography variant='h9' align='center'>
              Qty: {items.inventory}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={styles.CardButton}>
          <Button onClick={() => addItemToCart(items)} value={items} color="primary" size='small'>Add to Cart</Button>
          <Link to={`/details/${items.id}`} value={items} style={{ textDecoration: 'none' }}>
            <Button color="primary" size='small'>Details</Button>
          </Link>
        </CardActions>
      </Card>
    );

  };
  return (
    <Box component='div' sx={styles.box} >
      {results}
    </Box>
    // this will display on page
  )
}

export default Products;
