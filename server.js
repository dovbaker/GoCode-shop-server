const fs = require('fs');





// const data = fs.readFile("stam.json", "utf8", (err, data) =>
// {
//     const json= JSON.parse(data);

//     json.push(
//         {
//             id: json.length,
//             title: "hi"
            
//         }
//     );
//     fs.writeFile("stam.json",JSON.stringify(json),(err)=>{})
// });


// const http = require('http');

// http.createServer((req, res) => {
//     // console.log("hiiiiiiii");
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("hello\n")
// }).listen(8080);

const exp = require("express");

const app = exp();

app.get("/:id", (req, res) => {
     const { id } = req.params;
     console.log(id);
    fs.readFile("./products.json", "utf8", (err, data) => {
        const products = JSON.parse(data);
        const product = products.find((prod) => prod.id === +id);

        res.send(product);
    })
   
});

app.get("/", (req, res) => {
  
  fs.readFile("./products.json", "utf8", (err, data) => {
    const products = JSON.parse(data);

    res.send(products);
  });
});



app.listen(8080);
