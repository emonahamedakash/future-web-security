const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create product schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    reuired: true,
  },
  description: {
    type: String,
    reuired: true,
  },
  price: {
    type: Number,
    reuired: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//create product model
const Product = mongoose.model("Products", productSchema);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

//CRUD-create,read,update,delete
//create
app.post("/products", async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  const productData = await newProduct.save((err, result) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.status(201).json({
        success: true,
        message: result,
      });
    }
  });
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  // .limit(2);
  if (products) {
    res.status(200).send(products);
  } else {
    res.status(404).send({ message: "products not found" });
  }
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ _id: id });

  if (product) {
    res.status(200).json({
      success: true,
      message: "return single product",
      data: product,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "products not found",
    });
  }
});

mongoose.connect("mongodb://localhost:27017/testProductDB", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db is connected");
  }
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

// post : /products -> creaqate a product
// get : /products -> return all the products
// get : /products/:id -> return a specific product
// put : /products/:id -> updat ea product based on id
// delete : /product/:id -> delete a product based on id
