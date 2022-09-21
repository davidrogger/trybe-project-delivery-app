'use strict';

const attributes = require('../attributes/salesProductsAttributes');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('sales_products', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('sales_products');
  }
};