import React,{useState,useEffect} from 'react'
import {Container,Grid,Button,Typography} from "@material-ui/core"
import useStyles from "./styles"
import CartItem from './cartItem/CartItem'
import {Link} from "react-router-dom"



const Cart = ({cart}) => {
    console.log(cart)
    const classes=useStyles()
  
    const [totalPrice,setTotalPrice]=useState(0)

    useEffect(() => {
       const price=  cart.reduce(
        (previous, current)=>previous+current.price.raw, 
        0);
          setTotalPrice(price)
        
        // return () => {
        //     setTotalPrice(0)
           
        // }
    }, [cart])


    const EmptyCart=()=>(
        <Typography variant="subtitle1"  >you have no items in shoping cart
        
        <Link to="/" className={classes.link}  >start adding some</Link>
        </Typography>

    )
    const FilledCart=()=>(
     <>
     <Grid container spacing={3} >
         {cart.map((item)=>(
             <Grid item xs={12} sm={4} key={item.id}>
                 <CartItem item={item}       />

             </Grid>
         ))}

     </Grid>
     <div className={classes.cardDetails}>
         <Typography variant="h4"   >
             subtotal:${totalPrice}
 
         </Typography>
         <div>
             <Button  className={classes.emptyButton}  size="large" type="button" variant="contained" color="secondary">Empty Cart </Button>
             <Button  className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout </Button>
         </div>

     </div>
     
     
     </>

    )


    return (
        <Container>
            <div  className={classes.toolbar}     />
            <Typography className={classes.title} varaint="h3" gutterBottom  >Your Shopping Cart</Typography>
            {cart.length===0 ?<EmptyCart/>:<FilledCart/> }
            
        </Container>
    )
}

export default Cart
