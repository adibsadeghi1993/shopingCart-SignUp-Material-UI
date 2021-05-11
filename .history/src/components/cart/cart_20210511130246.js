import React,{useState,useEffect} from 'react'
import {Container,Grid,Button,Typography} from "@material-ui/core"
import useStyles from "./styles"



const Cart = ({cart}) => {
    const classes=useStyles()
    const isEmpty= cart.length===0 ?true:false
    const [totalPrice,setTotalPrice]=useState(0)

    useEffect(() => {
       const price=   cart.reduce((a,b)=>{
              return a+b
          },0)
          setTotalPrice(price)
        
        return () => {
            setTotalPrice(0)
           
        }
    }, [cart])


    const EmptyCart=()=>(
        <Typography variant="subtitle1"  >your Cart is empty start adding some</Typography>

    )
    const FilledCart=()=>(
     <>
     <Grid container spacing={3} >
         {cart.map((item)=>(
             <Grid item xs={12} sm={4} key={item.id}>
                 <

             </Grid>
         ))}

     </Grid>
     <div className={classes.cardDetails}>
         <Typography variant="h4"   >
             subtotal:{totalPrice}
 
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
            <Typography className={classes.title} varaint="h3"  >Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> :<FilledCart/>}
            
        </Container>
    )
}

export default Cart
