import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";
import useStyles from "./stayles";

const Products = ({ products,cartHandler }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.length === 0 ? (
          <p>data is loading</p>
        ) : (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} cartHandler={cartHandler} />
            </Grid>
          ))
        )}
      </Grid>
    </main>
  );
};

export default Products;
