import Product from "./Product";
import React from "react";
import "./Products.css";
import Grid from "@material-ui/core/Grid";

const Products = ({ productList }) => {
  return (
    <Grid container spacing={3}>
      {productList.map((prod) => (
        <Grid item xs={3}>
          <Product
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
            category={prod.category}
            image={prod.image}
          />
        </Grid>
      ))}
    </Grid>
    // </section>
  );
};

export default Products;
