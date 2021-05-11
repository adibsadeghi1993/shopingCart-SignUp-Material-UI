import { Grid } from '@material-ui/core'
import React from 'react'
import Product from "./Product/Product"



const products=[
    {id:1,name:"shoes",description:"running shoes",price:"$8" , image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FA4GDK27VMnz6LtFDy9yzk.jpg&imgrefurl=https%3A%2F%2Fglobal.techradar.com%2Fnl-nl%2Fnews%2Fbeste-13-inch-laptops&tbnid=lFoG7gsTNCWsgM&vet=12ahUKEwiPvIjalr_wAhUFdBoKHej2BFYQMygAegUIARDHAQ..i&docid=D5kuY8PeAFvjfM&w=1920&h=1080&q=image%20laptop&ved=2ahUKEwiPvIjalr_wAhUFdBoKHej2BFYQMygAegUIARDHAQ"},
    {id:2,name:"mackbook",description:"Apple macbook",price:"$5", image:""},
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
