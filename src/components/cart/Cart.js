import React,{useState,useEffect} from 'react'
import {Container,Grid,Button,Typography} from "@material-ui/core"
import useStyles from "./styles"
import CartItem from './cartItem/CartItem'
import {Link} from "react-router-dom"



const Cart = ({cart,decreaseHandler,increaseHandler,setCart}) => {
    // console.log(cart)
    const classes=useStyles()
  
    const [totalPrice,setTotalPrice]=useState(0)

   const emptyCartHandler=()=>[
  setCart([])
    ]

    useEffect(() => {
       const price=  cart.reduce(
        (previous, current)=>previous+current.price.raw*current.qty, 
        0);
          setTotalPrice(price)
        
    }, [cart])


    const EmptyCart=()=>(
        <Typography variant="subtitle1"  >you have no items in shoping cart
        
        <Link to="/" className={classes.link}  >start adding some</Link>
        </Typography>

    )
    const FilledCart=()=>(
     <>
     <Grid container spacing={3}  className="cart">
         {cart.map((item)=>(
             <Grid item xs={12} sm={4} key={item.id}>
                 <CartItem cart={cart} setCart={setCart}  item={item} increaseHandler={increaseHandler} decreaseHandler={decreaseHandler}     />

             </Grid>
         ))}

     </Grid>
     <div className="buttoncart">
         <Typography variant="h5"   >
             totalPrice:${totalPrice}
 
         </Typography>
         <div className="buttons" >
             <Button  className={classes.emptyButton}  size="large" type="button" variant="contained" color="secondary" onClick={emptyCartHandler}>Empty Cart </Button>
            <Link to="/checkout"  > <Button  className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout </Button></Link>
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
