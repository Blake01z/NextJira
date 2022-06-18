import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { FC } from 'react'

const NavBar:FC = () => {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        
        <IconButton size='large' edge='start'>
          <MenuOutlinedIcon/>
        </IconButton>
        
        <Typography variant='h6'>OpenJira</Typography>
      
      </Toolbar>
    </AppBar>
  )
}

export { NavBar }