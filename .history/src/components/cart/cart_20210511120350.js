import React from 'react'
import {Container,Grid,Button,Typography} from "@material-ui/core"


const C = () => {
    const isEmpty=true

    const EmptyCart=()=>(
        <Typography variant="subtitle1"  >your C is empty start adding some</Typography>

    )
    const FilledCart=()=>(
     <Grid container spacing={3} >

     </Grid>

    )


    return (
        <Container>
            <div  className={classes.toolbar}     />
            <Typography className={classes.title} varaint="h3"  >Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> :<FilledCart/>}
            
        </Container>
    )
}

export default C
