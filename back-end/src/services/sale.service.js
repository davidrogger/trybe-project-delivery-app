const model = require('../database/models');

const saleService = {
  async getSalesByUserId(userId) {
    return model.Sale.findAll({ where: { userId } });
  },
  async create(payload) {
    const { products, ...saleData } = payload;
    const sale = await model.Sale.create({ ...saleData });
    const productsWithSaleId = products.map((product) => ({ ...product, saleId: sale.id }));
    await model.SalesProduct.bulkCreate(productsWithSaleId);
    return sale;
  },
};

module.exports = saleService;
