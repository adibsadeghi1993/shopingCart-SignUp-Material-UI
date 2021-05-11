import React from 'react'
import {Typography,Card,CardActions,CardMedia,cardContent,Button} from "@material-ui/core"
import useStyles from "./styles"

const CartItem = () => {
    const classes=useStyles()
    return (
        <Card>
            <CardMedia  image={item.media.source}  />
            
        </Card>
    )
}

export default CartItem
 