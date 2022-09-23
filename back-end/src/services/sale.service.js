const model = require('../database/models');

const saleService = {
  async getSalesByUserId(userId) {
    return model.Sale.findAll({ where: { userId }, raw: true });
  },
  async create(payload) {
    const { id, status, saleData } = await model.Sale.create({ ...payload }, { raw: true });
    return { id, ...payload, status, saleData };
  },
};

module.exports = saleService;
