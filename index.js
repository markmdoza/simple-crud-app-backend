// This is the brain of the backend.
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/productRoute");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routing
app.use("/products", productRoute);

// This is the mongoDB connection.
mongoose
  .connect(
    "mongodb+srv://marklmdoza:2jSpVQwXHF5ekSyT@backenddb.ma5t4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connection to the database was successful!");
    // Adding the app.listen after the log to connect to the database first then run the server.
    app.listen(3000, () => {
      console.log("Server is running on Port 3000!");
    });
  })
  .catch(() => {
    console.log("Connection was not successful!");
  });
