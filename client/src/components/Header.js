import React from "react";
import "./Header.css";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

const Header = ({ onChoose, categories, setPriceRange, min, max }) => {
  let index = 1;
  //update range of price
  // const [priceRange, setPriceRange] = useState([min, max]);
  // const updateRange = (err, data) => {
  //   setPriceRange({ data });
  // };

  //
  // const onChange = (e, value) => {
  //   setPriceRange((state) => ({ ...state, value }));
  //   onChoose();
  // };

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <nav className="product-filter">
          <label>Filter by:</label>
          <select id="category-select" onChange={onChoose}>
            {categories.map((cat) => (
              <option key={index++}> {cat}</option>
            ))}
          </select>
          {/* </div>
          </div> */}

          {/* <div className="collection-sort">
          <label>Sort by:</label>
          <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
          </select>
        </div> */}
        </nav>
      </Grid>
      <Grid item xs={3}>
        {/* <Slider value={priceRange} min={min} max={max} onChange={updateRange}></Slider> */}
        <Slider
          valueLabelDisplay="on"
          onChange={setPriceRange}
          min={min}
          max={max}
          defaultValue={[min, max]}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
