import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';



function Footer() {
  return (
    <AppBar position='static' sx={{ margin: '20px', padding: '10px', backgroundColor: 'rgb(37, 150, 190)' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h5'>&copy; Martha Quintanilla-Ramirez
        </Typography>
        <Typography sx={{ padding: '1rem' }} variant='subtitle2'>React + Redux + Material Ui</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;
