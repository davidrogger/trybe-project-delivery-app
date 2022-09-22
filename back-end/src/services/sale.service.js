const model = require('../database/models');

const saleService = {
  async getSalesByUserId(userId) {
    return model.Sale.findAll({ where: { userId }, raw: true });
  },
};

module.exports = saleService;
