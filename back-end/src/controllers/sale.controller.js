const saleService = require('../services/sale.service');

const saleController = {
  async getSalesByUser(req, res) {
    const userId = Number(req.params.userId);
    const products = await saleService.getSalesByUserId(userId);
    res.status(200).json(products);
  },
  async create(req, res) {
    const { sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = req.body;
    const userId = Number(req.params.userId);

    const payload = { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products };
    const sale = await saleService.create(payload);
    res.status(201).json(sale);
  },

  async getSalesByOrderId(req, res) {
    const { id } = req.params;
    const sale = await saleService.getSalesByOrderId(Number(id));
    res.status(200).json(sale);
  },
};

module.exports = saleController;