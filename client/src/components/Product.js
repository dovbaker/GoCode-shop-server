import { Button } from "@material-ui/core";
import { useContext } from "react";

import React from "react";
import "./Product.css";
import CartContext from "./CartContext";
import RemoveContext from "./RemoveContext";

const Product = ({ id, title, price, description, category, image }) => {
  const { onAdd } = useContext(CartContext);
  const onRemove = useContext(RemoveContext);
  // console.log(id);
  return (
    <div className="product-card">
      <Button
        onClick={() =>
          onAdd({ id, title, price, description, category, image })
        }
        variant="contained"
        color="primary"
      >
        Add
      </Button>
      <Button
        onClick={() =>
          onRemove({ id, title, price, description, category, image })
        }
        variant="contained"
        color="primary"
      >
        Remove
      </Button>
      <div className="product-image">
        <img src={image} alt="Error" />{" "}
      </div>
      <div className="product-info">
        <h5> {title}</h5>
        <h6> {price}$ </h6> {/* <h6> {description} </h6>{" "} */}
        <h6> {category} </h6>
      </div>
    </div>
  );
};
export default Product;
