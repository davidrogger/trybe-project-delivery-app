const saleService = require('../services/sale.service');

const saleController = {
  async getSalesByUser(req, res) {
    const { userId } = req.params;
    const products = await saleService.getSalesByUserId(userId);
    res.status(200).json(products);
  },
};

module.exports = saleController;