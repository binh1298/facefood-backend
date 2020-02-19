'use strict';
const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [
      {
        post_id: '40eb286f-b859-4643-becb-72ea2a4f613e',
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
        post_id: '36d0dca0-994f-4dac-b71d-3a9189b84758',
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
        post_id: '8f8a506b-cb8c-4d70-bda8-b86dd88dd7d7',
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
        post_id: 'b8c24881-e053-46f1-afea-6b27653905d6',
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
        post_id: 'bb9ace81-51ff-4941-84dd-2922404b970d',
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
        post_id: '0cab3544-1956-4c0e-ac2a-924fcca259a3',
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
        post_id: '46c76de2-bc37-4feb-918b-06a7a76f81b0',
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