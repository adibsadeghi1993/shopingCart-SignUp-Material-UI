import React from 'react'

import {AppBar,ToolBar,Typography,IconButton,Badge,Menu,MenuItem} from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import classes from '*.module.css';
import logo from "../../assets/logo.png"
const Navbar = () => {
    return (
        <>
        <AppBar position="fixed" color="inherit" className={classes.appbar}  >
            <ToolBar>
                <Typography variant="h6" className={classes.title} color="inherit" >
                <img src={logo} className={classes.image} height="25px"  />
                shopping cart
                </Typography>
                <div className={classes.grow}></div>
                <div className={classes.button}>
                    <IconButton a color="inherit">

                    </IconButton>

                </div>

            </ToolBar>

        </AppBar>
            
        </>
    )
}

export default Navbar
