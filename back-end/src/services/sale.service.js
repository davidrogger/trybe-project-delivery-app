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
    return model.Sale.findOne({
      where: { id },
      include: [
        {
          model: model.Product,
          as: 'products',
          attributes: { exclude: [] },
          through: { attributes: ['quantity'] },
        },
      ],
      attributes: { exclude: ['seller_id', 'user_id'] },
    });
  },

  async changeOrderStatus(payload, id) {
    await model.Sale.update(
     { status: payload },      
     { where: { id } },
    );
  },
};

module.exports = saleService;
