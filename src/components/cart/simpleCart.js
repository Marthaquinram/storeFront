import React from 'react'
// import { Link } from 'react-router-dom';
import { Box, Card, Button } from '@mui/material'
import { cartSlice } from '../../features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';


//useDispatch updates the state
// useSelector is to access the state (cartSlice, productSlice) 
function SimpleCart() {
  const dispatch = useDispatch();

  //grabbing from cartSlice
  const simpleCartItems = useSelector((cartState => cartState.cart.cartItems));
  console.log('HEY simple Cart Items: ', simpleCartItems);
  function deleteFromCartItems(item) {
    dispatch(cartSlice.actions.deleteFromCartItems(item))
  }

  let simpleCartArr = [];
  if (simpleCartItems.length > 0) {
    simpleCartArr = simpleCartItems.map(item => (

      <Card key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: '5px', width: '30%', }}>
        <Box>
          {item.name}
        </Box>
        <Button onClick={() => deleteFromCartItems(item)}>
          <DeleteTwoTone sx={{
            color: 'orange', "& button:focus": { color: "salmon" },
            "& button:active": { color: "black" }
          }} />
        </Button>

      </Card>
    )
    )
  }
  return (
    <Box>
      {simpleCartArr}
    </Box>
  )



};
export default SimpleCart;
