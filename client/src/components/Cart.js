import React, { useState } from "react";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "./CartContext";
import { Button, Drawer, ListItem, List, Card } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const Cart = () => {
  const [open, SetOpen] = useState(false);
  const { addedToCart } = useContext(CartContext);
  let index = 0;

  return (
    <>
      {/* <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton> */}
      <Button onClick={() => SetOpen(true)}>
        {/* <StyledBadge badgeContent={addedToCart.length}> */}
        <ShoppingCartIcon />
        {/* </StyledBadge> */}
      </Button>

      <Drawer open={open}>
        <List>
          <Button onClick={() => SetOpen(false)}>X</Button>

          {addedToCart.map((prod) => (
            <ListItem key={index++}>
              <Card>
                {/* <div className="product-image">
                <div className="product-info"> */}
                <h5> {prod.title}</h5>
                <h6> {prod.category} </h6>
                <h6> price: {prod.qty * prod.price}$ </h6>
                <h6>Quantety: {prod.qty}</h6>
                {/* </div>
              </div> */}
              </Card>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Cart;
