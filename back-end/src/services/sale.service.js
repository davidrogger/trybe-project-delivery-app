const model = require('../database/models');

const saleService = {
  async getSalesByUserId(userId) {
    return model.Sale.findAll({
      where: { userId },
      include: [
        {
          model: model.Product,
          as: 'products',
          attributes: { exclude: [] },
          through: { attributes: ['quantity'] },
        },
      ],
      attributes: { exclude: ['seller_id', 'user_id'] }, // tentando descobrir pq esses campos vem junto com userId e sellerId
    });
  },
  async create(payload) {
    const { products, ...saleData } = payload;
    const sale = await model.Sale.create({ ...saleData });
    const productsWithSaleId = products.map((product) => ({ ...product, saleId: sale.id }));
    await model.SalesProduct.bulkCreate(productsWithSaleId);
    return sale;
  },

  async getSalesByOrderId(id) {
    const sale = await model.Sale.findOne({
      where: { id },
      attributes: { exclude: ['seller_id', 'user_id'] },
      raw: true,
    });
    const productsResponse = await model.SalesProduct.findAll({
      where: { saleId: id },
      attributes: { exclude: ['saleId'] },
      raw: true,
    });
    const products = productsResponse
    .map(({ productId, quantity }) => ({ id: productId, quantity }));
    return { ...sale, products };
  },

  async changeOrderStatus(payload, id) {
    await model.Sale.update(
      { status: payload },
      { where: { id } },
    );
  },
};

module.exports = saleService;
