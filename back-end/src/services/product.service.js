const model = require('../database/models');

const productService = {
  async getAll() {
    return model.Product.findAll();
  },
};

module.exports = productService;
