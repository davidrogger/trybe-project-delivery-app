'use strict';

const attributes = require('../attributes/saleAttributes');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('sales', attributes)
  },

  async down (queryInterface) {
    await queryInterface.dropTable('sales')
  }
};
