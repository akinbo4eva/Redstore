import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'


interface props {
  darkMode: boolean;
 
  handeleChange: ()=> void;
}
const Header = ({darkMode, handeleChange}:props) => {
  return (
    <AppBar position='static' sx={{mb: 4}} >
        <Toolbar>
            <Typography variant='h6'>
                REDSTORE
            </Typography>
            <Switch checked={darkMode} onChange={handeleChange}/>
        </Toolbar>
    </AppBar>
  )
}

export default Header