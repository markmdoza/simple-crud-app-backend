// Basic schema setup
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name."],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    // This allows us to show when things were created and when they were last updated.
    timestamps: true,
  }
);

// When creating a mongoose.model - the first argument will become plural. So it will be good practice to use singular, and the second argument is saying the name of this schema, is from the actual name of the Schema.
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
