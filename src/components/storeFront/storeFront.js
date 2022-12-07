import React from 'react'
import Categories from './categories';
import Products from './products';
import SimpleCart from '../cart/simpleCart';
import { Container } from '@mui/material';

function StoreFront() {
  return (
    <Container maxWidth="xl">
      <SimpleCart />
      <Categories />
      <Products />
    </Container>
  )
}

export default StoreFront;
