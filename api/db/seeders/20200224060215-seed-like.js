'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('like', [{
      user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      post_id: 1,
      is_liked: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      user_id: 'bfad3537-875c-4bf2-bb97-41c00b912d76',
      post_id: 1,
      is_liked: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      user_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
      post_id: 1,
      is_liked: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
      post_id: 1,
      is_liked: false,
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
