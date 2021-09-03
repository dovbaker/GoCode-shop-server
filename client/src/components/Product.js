import { Button } from "@material-ui/core";
import { useContext } from "react";

import React from "react";
import "./Product.css";
import CartContext from "./CartContext";
import RemoveContext from "./RemoveContext";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: "0 10px 0 10px",
  },
  media: {
    height: 350,
    width: "90%",
    objectFit: "contain",
  },
}));

const Product = ({ id, title, price, description, category, image }) => {
  const { onAdd } = useContext(CartContext);
  const onRemove = useContext(RemoveContext);
  // console.log(id);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={category} className={classes.avatar}>
            {category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={title}
      />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>{category}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <RemoveIcon
            onClick={() =>
              onRemove({ id, title, price, description, category, image })
            }
          />
        </IconButton>
        <IconButton aria-label="share">
          <AddIcon
            onClick={() =>
              onAdd({ id, title, price, description, category, image })
            }
          />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{title}</Typography>
          <Typography paragraph>{description}</Typography>
          <Typography paragraph>{price}$</Typography>
        </CardContent>
      </Collapse>
    </Card>

    // <div className="product-card" height="100%">
    //   <Button
    //     onClick={() =>
    //       onAdd({ id, title, price, description, category, image })
    //     }
    //     variant="contained"
    //     color="primary"
    //   >
    //     Add
    //   </Button>
    //   <Button
    //     onClick={() =>
    //       onRemove({ id, title, price, description, category, image })
    //     }
    //     variant="contained"
    //     color="primary"
    //   >
    //     Remove
    //   </Button>
    //   <div className="product-image">
    //     <img src={image} alt="Error" />{" "}
    //   </div>
    //   <div className="product-info">
    //     <h5> {title}</h5>
    //     <h6> {price}$ </h6> {/* <h6> {description} </h6>{" "} */}
    //     <h6> {category} </h6>
    //   </div>
    // </div>
  );
};
export default Product;
