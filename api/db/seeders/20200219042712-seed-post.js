'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [{
      post_id: uuid(),
      post_name: "Potato Post 1",
      description: "this is a potato description of a post.",
      time_needed: 60,
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: uuid(),
      post_name: "Khoai 2",
      description: "Day la muc mieu ta cua bai dang Khoai 2.",
      time_needed: 100,
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
