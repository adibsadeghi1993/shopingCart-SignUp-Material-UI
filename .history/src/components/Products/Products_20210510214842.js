import { Grid } from '@material-ui/core'
import React from 'react'
import Product from "./Product/Product"
import useStyles from "./stayles"



const Products = ({products}) => {
    const classes=useStyles()
    return (
        <main className={classes.content}>
            <div  className={classes.toolbar}   />
            <Grid container justify="center" spacing={4} >
                {
                ))}
            </Grid>
            
        </main>
    )
}

export default Products
