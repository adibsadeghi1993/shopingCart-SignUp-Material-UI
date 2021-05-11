import React from 'react'
import {Container,Grid,Button,Typography} from "@material-ui/core"
import classes from '*.module.css'


const Cart = ({cart}) => {
    const isEmpty= cart.length===0 ?true:false

    const EmptyCart=()=>(
        <Typography variant="subtitle1"  >your Cart is empty start adding some</Typography>

    )
    const FilledCart=()=>(
     <>
     <Grid container spacing={3} >
         {cart.map((item)=>(
             <Grid item xs={12} sm={4} key={item.id}>
                 <div>{item.name}</div>

             </Grid>
         ))}

     </Grid>
     <div className={classes.cartDetails}>
         <Typography variant="h4"   >
             subtotal:
 
         </Typography>
         <div>
             <Butto n> </Button>
         </div>

     </div>
     
     
     </>

    )


    return (
        <Container>
            <div  className={classes.toolbar}     />
            <Typography className={classes.title} varaint="h3"  >Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> :<FilledCart/>}
            
        </Container>
    )
}

export default Cart
