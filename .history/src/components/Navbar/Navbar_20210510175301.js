import React from 'react'

import {AppBar,ToolBar,Typography,IconButton,Badge,Menu,MenuItem} from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import classes from '*.module.css';
const Navbar = () => {
    return (
        <>
        <AppBar position="fixed" color="inherit" className={classes.appbar}  >
            <ToolBar>
                <image/>
            </ToolBar>

        </AppBar>
            
        </>
    )
}

export default Navbar
