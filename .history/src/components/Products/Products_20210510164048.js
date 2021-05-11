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
                    <G
                ))}
            </Grid>
            
        </main>
    )
}

export default Products
