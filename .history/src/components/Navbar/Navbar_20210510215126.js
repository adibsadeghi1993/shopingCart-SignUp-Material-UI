import React from 'react'

import {AppBar,Typography,IconButton,Badge} from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import{Toolbar} from '@material-ui/core';



import useStyles from "./styles"
import logo from "../../assets/logo.png"
const Navbar = () => {
    const classes=useStyles()
    return (
        <>
        <AppBar position="fixed" color="inherit" className={classes.appbar}  >
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit" >
                <img src={logo} className={classes.image} height="25px"  />
                shopping cart
                </Typography>
                <div className={classes.grow}></div>
                <IconButton aria-label="show-cart-item" color="inherit">
                          <Badge badgeContent={4} color="secondary" >
                              <ShoppingCartIcon/>

                          </Badge>
                    </IconButton>
                
                <div className={classes.button}>
                    <IconButton aria-label="show-cart-item" color="inherit">
                          <Badge badgeContent={4} color="secondary" >
                              <ShoppingCartIcon/>

                          </Badge>
                    </IconButton>

                </div>

            </Toolbar>

        </AppBar>
            
        </>
    )
}

export default Navbar
