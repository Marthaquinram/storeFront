import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography variant="h6" component="div" color='white' sx={{ flexGrow: 1 }}>
              Store Front
            </Typography>
          </Link>
          <Link to='/checkout' style={{ textDecoration: 'none' }}>
            <Button sx={{ background: 'white', color: 'black', '&:hover': { backgroundColor: 'yellow' } }} variant="outlined"><ShoppingCartIcon />Cart</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Header;
