import { Grid } from '@material-ui/core'
import React from 'react'

const products=[
    {id:1,name:"shoes",description:"running shoes"},
    {id:2,name:"mackbook",description:"running shoes"},
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4} ></Grid>
            
        </main>
    )
}

export default Products
