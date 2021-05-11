import React from 'react'

import {AppBar,ToolBar,Typography,IconButton,Badge,Menu,MenuItem} from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from "./styles"
import logo from "../../assets/logo.png"
const Navbar = () => {
    const classes
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
                    <IconButton aria-label="show-cart-item" color="inherit">
                          <Badge badgeContent={4} color="secondary" >
                              <ShoppingCartIcon/>

                          </Badge>
                    </IconButton>

                </div>

            </ToolBar>

        </AppBar>
            
        </>
    )
}

export default Navbar
