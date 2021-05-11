import React from 'react'
import {Typography,Card,CardActions,CardMedia,cardContent,Button, CardContent} from "@material-ui/core"
import useStyles from "./styles"

const CartItem = ({item}) => {
    const classes=useStyles()
    return (
        <Card>
            <CardMedia  image={item.media.source} alt={item.name} className={classes.media}  />
            <CardContent>
                <Typography var >{item.name}</Typography>
            </CardContent>
        </Card>
    )
}

export default CartItem
 