import { Grid } from '@material-ui/core'
import React from 'react'

const products=[
    {id:1,name:"shoes",description:"running shoes"},
    {id:2,name:"mackbook",description:"Apple macbook"},
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4} >
                {products.map(product=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                ))}
            </Grid>
            
        </main>
    )
}

export default Products
