import React from 'react'
import {Card,CardContent,CardMedia,CardActions,Typography,IconButton} from "@material-ui/core"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import classes from '*.module.css'

const Product = () => {
    return (
        <Card className={classes.root}  >
            <CardMedia className={classes.media} image=""  title={product.name}  />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gut>

                    </Typography>

                </div>
            </CardContent>
        </Card>
    )
}

export default Product
