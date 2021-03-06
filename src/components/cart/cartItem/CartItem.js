import React from 'react'
import {Typography,Card,CardActions,CardMedia,Button, CardContent} from "@material-ui/core"
import useStyles from "./styles"

const CartItem = ({item,decreaseHandler,increaseHandler,cart,setCart}) => {

    const removeHandler=(item)=>{
        const oldCart=[...cart]
        const updatedCart=oldCart.filter(product=>product.id !== item.id)
        setCart(updatedCart)

    }





    const classes=useStyles()
    return (
        <Card>
            <CardMedia  image={item.media.source} alt={item.name} className={classes.media}  />
            <CardContent>
           <div className="cartcontent">
           <h2 >{item.name}</h2>
                <h2 >{item.price.formatted_with_symbol}</h2>
           </div>
            </CardContent>
            <CardActions className={classes.cardActions}  >
                   <div className={classes.buttons}>
                       <Button type="button" size="small" color="secondary" onClick={()=>decreaseHandler(item)}  >-</Button>
                       <Typography>{item.qty}</Typography>
                       <Button type="button" size="small" color="primary" onClick={()=>increaseHandler(item)}  >+</Button>

                   </div>
                   <Button type="button" variant="contained" size="small" color="secondary" onClick={()=>removeHandler(item)} >Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
 