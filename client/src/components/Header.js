import React from "react";
import "./Header.css";
import Slider from "@material-ui/core/Slider";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Cart from "../components/Cart";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Header = ({ onChoose, categories, setPriceRange, min, max }) => {
  const [category, setCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);

  let index = 1;
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
    onChoose(event);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4}>
              <Cart />
            </Grid>
            <Grid item xs={4}>
              <Typography>Category</Typography>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  All
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={category}
                  onChange={handleChange}
                >
                  {categories.map((cat) => (
                    <MenuItem value={cat}> {cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              {/* <Container maxWidth="xs" edge="end"> */}
              <Slider
                valueLabelDisplay="on"
                onChange={setPriceRange}
                min={min}
                max={max}
                defaultValue={[min, max]}
                color="secondary"
              />
              {/* </Container> */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
