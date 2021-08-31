import React, { useState } from "react";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "./CartContext";
import { Button, Drawer, ListItem, List } from "@material-ui/core";

const Cart = () => {
  const [open, SetOpen] = useState(false);
  const { addedToCart } = useContext(CartContext);
  let index = 0;

  return (
    <>
      <Button onClick={() => SetOpen(true)}>open</Button>

      <Drawer open={open}>
        <List>
          <Button onClick={() => SetOpen(false)}>X</Button>

          {addedToCart.map((prod) => (
            <ListItem key={index++}>
              <div className="product-image">
                <div className="product-info">
                  <h5> {prod.title}</h5>
                  <h6> {prod.category} </h6>
                  <h6> price: {prod.qty * prod.price}$ </h6>
                  <h6>Quantety: {prod.qty}</h6>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Cart;
