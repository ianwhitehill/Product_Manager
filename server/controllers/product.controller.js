const Product = require("../models/product.models");

// CREATE
module.exports.createProdcut = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "Something went wrong when adding a product to the database!!", err: err}))
}

// READ ALL
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "Something went wrong when grabbing all products!!", err: err}))
}

// READ ONE
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Something went wrong when grabbing one product!!", err: err}))
}

// UPDATE
module.exports.updateProduct = (req, res) => {
    Product.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Something went wrong when updating a product!!", err: err}))
}

// DELETE
module.exports.deleteProduct = (req, res) => {
    Product.remove({_id: req.params._id})
        .then(res.json({message: "Product was successfully removed!"}))
        .catch(err => res.json({message: "Something went wrong when deleting a product from the database!!", err: err}))
}