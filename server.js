const fs = require('fs');
const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

app.get("/:id", (req, res) => {
    const { id } = req.params;
    
    fs.readFile("./products.json", "utf8", (err, data) => {
        if(!err) 
       { const products = JSON.parse(data);
            const product = products.find((prod) => prod.id === +id);
            if (!product)
            {
                            res.send("Product not found.");

            }
            else
            res.send(product);
        }
        else
              res.send(ERR);
    })
   
});

app.get("/products", (req, res) => {
    fs.readFile("./products.json", "utf8", (err, data) => {
      if (!err) {
        const products = JSON.parse(data);
        res.send(products);
      }
      else
      {
          fs.writeFile("./products.json", "utf8", (err, data) => { });
          res.send([]);
          
      }
     
    });
});


const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  category: String,
  image: String
});

const Product = mongoose.model("product", productSchema);

    
app.post("/products", (req, res) => {
  const { title, description, category, image } = req.body;

  const product = new Product({ title, description, category, image });

  product.save();

  res.send("OK!");
});


mongoose.connect(
  "mongodb://localhost/gocode_shop",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => {
    app.listen(8080);
  }
);

