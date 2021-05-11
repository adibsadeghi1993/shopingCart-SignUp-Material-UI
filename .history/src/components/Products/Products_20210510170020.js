import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product/product'

const products=[
    {id:1,name:"shoes",description:"running shoes",price},
    {id:2,name:"mackbook",description:"Apple macbook"},
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4} >
                {products.map(product=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product}/>
                        </Grid>
                ))}
            </Grid>
            
        </main>
    )
}

export default Products
