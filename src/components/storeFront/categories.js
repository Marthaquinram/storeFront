import React from 'react'
import { Box, Tabs, Typography, Tab } from '@mui/material'
import { categoryTabs } from './data';




function Categories() {
  return (
    <Box>
      <Typography> Browse our Categories</Typography>
      <Tabs>

        {categoryTabs.map((items, key) => (
          <Tab key={items.id} label={items.title} value={items.value} />
        )

        )}
      </Tabs>
    </Box>
  )
}

export default Categories;
