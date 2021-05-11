import React from 'react'
import {Card,CardContent,CardMedia,CardActions,Typography,IconButton} from "@material-ui/core"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import classes from '*.module.css'

const Product = ({product}) => {
    return (
        <Card className={classes.root}  >
            <CardMedia className={classes.media} image=""  title={product.name}  />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}

                    </Typography>
                    <Typography variant="h5" >
                        {product.price}

                    </Typography>
                    <Typography variant="h2" color="textSecondary" >
                        {product.description}

                    </Typography>

                </div>
            </CardContent>

            <CardActions  disableSpacing className={classes.cardActions}  >
                   
            </CardActions>
        </Card>
    )
}

export default Product
