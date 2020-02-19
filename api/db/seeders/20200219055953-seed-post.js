'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [
      {
        post_id: 'e0bd0406-e5a7-48db-9246-d66a17814d70',
        post_name: "Potato Post 1",
        description: "this is a potato description of a post.",
        time_needed: 60,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: '814c39e1-c76a-4b0c-9d1e-714d601cdcff',
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd'
      },
      {
        post_id: '470d1869-1308-492e-9684-4cd7cb4552a0',
        post_name: "Potato Post 2",
        description: "THIS IS 2ND DESCRIPTION OF POTATO!",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: '472a49b0-8390-4718-a5ec-ea04629b31a1',
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd'
      },
      {
        post_id: '6d67142d-a3ea-4f5b-ad46-c4877325cdfa',
        post_name: "DucPhi 1",
        description: "DucPhi 1's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: '472a49b0-8390-4718-a5ec-ea04629b31a1',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2'
      },
      {
        post_id: '2c4f502b-9fdf-44f8-97f0-68a1fc10308f',
        post_name: "DucPhi 2",
        description: "DucPhi 2's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: '472a49b0-8390-4718-a5ec-ea04629b31a1',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2'
      },
      {
        post_id: 'c460d653-69c8-49f3-8e04-e2aed0e44311',
        post_name: "DucPhi 3",
        description: "DucPhi 3's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: '472a49b0-8390-4718-a5ec-ea04629b31a1',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2'
      },
      {
        post_id: '5b23ec3b-c41c-444b-8e21-12cc9fdabfa5',
        post_name: "DucPhi 4",
        description: "DucPhi 4's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: '472a49b0-8390-4718-a5ec-ea04629b31a1',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2'
      },
      {
        post_id: '7378209b-8cd1-482c-988b-6ba5cf92e802',
        post_name: "DucPhi 5",
        description: "DucPhi 5's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: '472a49b0-8390-4718-a5ec-ea04629b31a1',
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2'
      },
      ], {});
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