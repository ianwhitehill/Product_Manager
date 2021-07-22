const mongoose = require("mongoose");

//Example 
//
//description: {
//        type: String,
//        required: [true, "Description is required!"],
//        minlength: [10, "Description must be longer!"],
//        maxlength: [1000, "Description must be less than 1000 characters!"]
//    },
//new

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [2, "Title requires at least 2 characters!!"],
        maxlength: [75, "Title most be less the 75 characters!!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [10, "Description must be longer then 10!"],
        maxlength: [1000, "Description must be less than 1000 characters!"]
    }
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product