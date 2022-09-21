'use strict';

const attributes = require('./saleAttributes')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTabel('sales', attributes)
  },

  async down (queryInterface) {
    await queryInterface.dropTabel('sales')
  }
};
