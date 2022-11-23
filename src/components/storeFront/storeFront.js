import React from 'react'
import Categories from './categories';
import Products from './products';
import { Container } from '@mui/material';

function StoreFront() {
  return (
    <Container maxWidth="xl">
      <Categories />
      <Products />
    </Container>
  )
}

export default StoreFront;
