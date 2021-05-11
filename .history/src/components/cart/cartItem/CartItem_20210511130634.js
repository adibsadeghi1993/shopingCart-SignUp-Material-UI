import React from 'react'
import {Typography,Card,CardActions,CardMedia,cardContent,Button} from "@material-ui/core"
import useStyles from "./styles"

const CartItem = ({item}) => {
    const classes=useStyles()
    return (
        <Card>
            <CardMedia  image={item.media.source} alt={item.name} className={classes.media}  />
            
        </Card>
    )
}

export default CartItem
 