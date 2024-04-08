import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  
  return (
   
   


    <div>
        <Box sx={{flexGrow:1}}>
            <AppBar component={"nav"} sx={{bgcolor:"black"}}>
                <Toolbar>
                    <Typography sx={{flexGrow:1}} align='left'  fontFamily='fantasy' variant='h6'>
                      <RestaurantRoundedIcon/>
                      &nbsp;kapilavastu</Typography>
                    <Button >
                    <Link to='Home' style={{color:'white'}}>Home</Link></Button>&nbsp;
                    <Button>
                      <Link to='Login' style={{color:'white'}}>Login</Link></Button>&nbsp;
                    <Button >
                      <Link to='Signup' style={{color:'white'}}>Sign-Up</Link></Button>
                      {/* <Button >
                      <Link to='Menu' style={{color:'white'}}>Menu</Link></Button>
                    */}
                    <Button >
                     
                    <Link to='Cart' style={{color:'white'}}>Cart</Link></Button>
                      
                  
                </Toolbar>
            </AppBar>
        </Box>
    </div>

  )
}

export default Navbar
  