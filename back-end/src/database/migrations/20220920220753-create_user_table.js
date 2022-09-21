'use strict';

const attributes = require('../attributes/userAttributes');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('users', attributes)
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users')
  }
};
