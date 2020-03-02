'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comment', [{
      comment_id: 'a664d13a-8017-458c-8878-6901c93a0a7e',
      user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      post_id: '40eb286f-b859-4643-becb-72ea2a4f613e',
      content: 'Test comment 1',
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      comment_id: '722c1034-0ce4-44aa-9db8-6a5bcdc9c338',
      user_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
      post_id: '40eb286f-b859-4643-becb-72ea2a4f613e',
      content: 'Test comment 2',
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      comment_id: 'f74a3d51-ea76-4960-9a21-425c9a490ddf',
      user_id: 'bfad3537-875c-4bf2-bb97-41c00b912d76',
      post_id: '40eb286f-b859-4643-becb-72ea2a4f613e',
      content: 'Test comment 3',
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      comment_id: '4e0c90db-5366-4b0d-b1fb-cf021f0217ca',
      user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
      post_id: '40eb286f-b859-4643-becb-72ea2a4f613e',
      content: 'Test comment 4',
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date()
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
