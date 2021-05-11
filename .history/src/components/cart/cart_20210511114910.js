import React from 'react'
import {Container,Grid,Button,Typography} from "@material-ui/core"


const cart = () => {
    return (
        <Container>
            <div  className={classes.toolbar}     />
            <Typography className={classes.title} varient  >Your Shopping Cart</Typography>
            
        </Container>
    )
}

export default cart
