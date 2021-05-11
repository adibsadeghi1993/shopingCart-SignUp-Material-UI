import { Grid } from '@material-ui/core'
import React from 'react'
import Product from "./Product/Product"



const products=[
    {id:1,name:"shoes",description:"running shoes",price:"$8" , image:"https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg"},
    {id:2,name:"mackbook",description:"Apple macbook",price:"$5", image:"https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg"},
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4} >
                {products.map(product=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product}   />
                        </Grid>
                ))}
            </Grid>
            
        </main>
    )
}

export default Products
