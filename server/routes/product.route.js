// bring in the controls from the controller
const ProductController = require("../controllers/product.controller");

module.exports = app => {
    // CREATE
    app.post("/api/product/create", ProductController.createProdcut);
    // READ ALL
    app.get("/api/products", ProductController.findAllProducts);
    // READ ONE
    app.get("/api/product/:_id", ProductController.findOneProduct);
    // UPDATE
    app.put("/api/product/update/:_id", ProductController.updateProduct);
    // DELETE
    app.delete("/api/product/delete/:_id", ProductController.deleteProduct);
}