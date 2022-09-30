const saleService = require('../services/sale.service');

const saleController = {
  async getOrdersByUserId(req, res) {
    const userId = Number(req.params.id);
    const products = await saleService.getOrdersByUserId(userId);
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

  async changeOrderStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    await saleService.changeOrderStatus(status, Number(id));
    res.status(200).json({ message: 'success updated!' });
  },

  async getOrdersBySellerId(req, res) {
    const { id } = req.params;
    const orders = await saleService.getOrdersBySellerId(Number(id));
    res.status(200).json(orders);
  },
};

module.exports = saleController;