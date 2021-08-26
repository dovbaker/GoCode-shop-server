const fs = require("fs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

// app.get("/:id", (req, res) => {
//     const { id } = req.params;

//     fs.readFile("./products.json", "utf8", (err, data) => {
//         if(!err)
//        { const products = JSON.parse(data);
//             const product = products.find((prod) => prod.id === +id);
//             if (!product)
//             {
//                             res.send("Product not found.");

//             }
//             else
//             res.send(product);
//         }
//         else
//               res.send(ERR);
//     })

// });

// app.get("/products", (req, res) => {
//     fs.readFile("./products.json", "utf8", (err, data) => {
//       if (!err) {
//         const products = JSON.parse(data);
//         res.send(products);
//       }
//       else
//       {
//           fs.writeFile("./products.json", "utf8", (err, data) => { });
//           res.send([]);

//       }

//     });
// });

//mongoose setup
const productSchema = new mongoose.Schema({
  //   id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

const Product = mongoose.model("product", productSchema);

//initialize DB
function initProducts() {
  Product.findOne((err, data) => {
    if (!data) {
      fs.readFile("./products.json", "utf8", (err, data) => {
        if (!err) {
          let initProducts = JSON.parse(data);
          //console.log("Initialization");
          Product.insertMany(initProducts, (err, data) => {});
        }
      });
    }
  });
}

initProducts();

//add product
app.post("/products", (req, res) => {
  const { id, title, description, category, image } = req.body;
  const product = new Product({ id, title, description, category, image });
  product.save();
  res.send("OK!");
});

//update product
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, description, category, image } = req.body;
  const updateFields = {};
  title ? (updateFields.title = title) : null;
  price ? (updateFields.price = price) : null;
  description ? (updateFields.description = description) : null;
  category ? (updateFields.category = category) : null;
  image ? (updateFields.image = image) : null;

  Product.findByIdAndUpdate(id, updateFields, (err, data) => {
    if (!err) {
      res.send("Updated.");
    } else {
      res.send("ERROR, did not update product.");
    }
  });
});



//get by id
app.get("/products/:id", (req, res) => {
    const { id } = req.params;
  console.log(id);
  Product.findById(id,(err, data) => {
    if (!err)
    {
      res.send(data);
    }
    else
    {
      res.send("ERROR, did not find product.");
    }
  });
});

//query product- title case insensetive and included
app.get("/products", (req, res) => {

  let { title, min, max, category, description } = req.query;
  const serchFields = {};

  // title ? (serchFields.title = title ) : "";

  min ? 0 : (min = 0);
  max ? 0 : (max = Number.MAX_SAFE_INTEGER);
  description ? (serchFields.description = description) : "";
  category ? (serchFields.category = category) : "";

  Product.find(
    {
      ...serchFields,
      title: { $regex: new RegExp(title, "i") },
      // description: { $regex: new RegExp(description, "i") },
      // category: { $regex: new RegExp(category, "i") },
      price: { $gte: min, $lte: max },
    },
    function (err, data) {
      if (data) res.send("found:" + data);
      else res.send("not found");
    }
  );
});

//delete product
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  Product.findOneAndDelete(id, (err, data) => {
    if (data) {
      res.send("Deleted.");
    } else {
      res.send("ERROR, did not delete product.");
    }
  });
});

//connect to DB and then to client
mongoose.connect(
  "mongodb://localhost/gocode_shop",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => {
    app.listen(8080);
  }
);
