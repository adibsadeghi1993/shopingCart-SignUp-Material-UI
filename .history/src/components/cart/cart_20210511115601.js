import React from 'react'
import {Container,Grid,Button,Typography} from "@material-ui/core"


const cart = () => {
    const isEmpty=true

    const EmptyCart=()=>(
        <Typography variant="subtitle"  >your cart is empty start adding some</Typography>

    )


    return (
        <Container>
            <div  className={classes.toolbar}     />
            <Typography className={classes.title} varaint="h3"  >Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> :<FilledCart/>}
            
        </Container>
    )
}

export default cart
