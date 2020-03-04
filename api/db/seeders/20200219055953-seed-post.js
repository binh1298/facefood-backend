'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [
      {
        post_id: 1,
        post_name: "Potato Post 1",
        description: "this is a potato description of a post.",
        time_needed: 60,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
        username: 'SpacePotato',
      },
      {
        post_id: 2,
        post_name: "Potato Post 2",
        description: "THIS IS 2ND DESCRIPTION OF POTATO!",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
        username: 'SpacePotato',
      },
      {
        post_id: 3,
        post_name: "DucPhi 1",
        description: "DucPhi 1's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_id: 4,
        post_name: "DucPhi 2",
        description: "DucPhi 2's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_id: 5,
        post_name: "DucPhi 3",
        description: "DucPhi 3's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_id: 6,
        post_name: "DucPhi 4",
        description: "DucPhi 4's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
      },
      {
        post_id: 7,
        post_name: "DucPhi 5",
        description: "DucPhi 5's Description.",
        time_needed: 100,
        is_deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
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