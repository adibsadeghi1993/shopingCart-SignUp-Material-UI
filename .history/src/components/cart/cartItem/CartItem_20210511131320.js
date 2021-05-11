import React from 'react'
import {Typography,Card,CardActions,CardMedia,cardContent,Button, CardContent} from "@material-ui/core"
import useStyles from "./styles"

const CartItem = ({item}) => {
    const classes=useStyles()
    return (
        <Card>
            <CardMedia  image={item.media.source} alt={item.name} className={classes.media}  />
            <CardContent>
                <Typography variant="h4" >{item.name}</Typography>
                <Typography variant="h4" >{item.price.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}  >
                   <div className={classes.buttons}>
                       <Button type="button" size="small"  >-</Button>
                       <Typography>number of product</Typography>
                       <Button type="button" size="small"  >+</Button>

                   </div>
                   <Button type="button" size="small"  ></Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
 