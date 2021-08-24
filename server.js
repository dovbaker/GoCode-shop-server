const fs = require('fs');





const exp = require("express");

const app = exp();

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
      } else res.send(ERR);
  });
});



app.listen(8080);
