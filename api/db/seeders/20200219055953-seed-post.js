'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [{
      post_id: 'e0bd0406-e5a7-48db-9246-d66a17814d70',
      post_name: "Potato Post 1",
      description: "this is a potato description of a post.",
      time_needed: 60,
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
      category_id: '814c39e1-c76a-4b0c-9d1e-714d601cdcff',
      user_id: '9903c282-06ed-48fe-9607-76e7903f6b72'
    },
      {
        post_id: '002cf14a-9cab-42fc-aa9a-502ee7e2dd22',
        post_name: "Khoai 2",
        description: "Day la muc mieu ta cua bai dang Khoai 2.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: '472a49b0-8390-4718-a5ec-ea04629b31a1',
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd'
      }, {
        post_id: '470d1869-1308-492e-9684-4cd7cb4552a0',
        post_name: "Potato Post 2",
        description: "THIS IS 2ND DESCRIPTION OF POTATO!",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: '472a49b0-8390-4718-a5ec-ea04629b31a1',
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