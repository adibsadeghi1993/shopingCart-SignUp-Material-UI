import React from 'react'

import {AppBar,Typography,IconButton,Badge} from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';

import{Toolbar} from '@material-ui/core';
import {Link} from "react-router-dom"



import useStyles from "./styles"
import logo from "../../assets/logo.png"
const Navbar = ({length}) => {
    const classes=useStyles()
    return (
        <>
        <AppBar position="fixed" color="inherit" className={classes.appbar}  >
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit" >
                <img src={logo} className={classes.image} height="25px" alt="shopping story" />
                shopping cart
                </Typography>
                <div className={classes.grow}></div>
               
                
               
                <IconButton  color="inherit">
                          <HomeTwoToneIcon/>
                    </IconButton>

            </Toolbar>

        </AppBar>
            
        </>
    )
}

export default Navbar
