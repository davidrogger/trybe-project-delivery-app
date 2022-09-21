'use strict';
const attributes = require('../attributes/productAttributes');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('products', attributes)
  },

  async down (queryInterface) {
    await queryInterface.dropTable('products');
  }
};
