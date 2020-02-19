'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [{
      post_id: 1,
      post_name: "Potato Post 1",
      description: "this is a potato description of a post.",
      time_needed: 60,
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
      category_id: 1,
      user_id: '9903c282-06ed-48fe-9607-76e7903f6b72'
    },
      {
        post_id: 2,
        post_name: "Khoai 2",
        description: "Day la muc mieu ta cua bai dang Khoai 2.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd'
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