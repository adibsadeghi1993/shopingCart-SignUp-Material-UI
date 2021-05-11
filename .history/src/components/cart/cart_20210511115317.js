import React from 'react'
import {Container,Grid,Button,Typography} from "@material-ui/core"


const cart = () => {
    const isEmpty=true


    return (
        <Container>
            <div  className={classes.toolbar}     />
            <Typography className={classes.title} varaint="h3"  >Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> }
            
        </Container>
    )
}

export default cart
