const productService = require('../services/product.service');

const productController = {
  async getAll(_req, res) {
    const products = await productService.getAll();
    res.status(200).json(products);
  },
};

module.exports = productController;
