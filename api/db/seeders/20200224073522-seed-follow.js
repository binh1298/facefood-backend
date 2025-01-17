'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('follow', [{
      following_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      user_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
      is_following: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      following_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
      is_following: true,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      following_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      user_id: 'da9c7b32-0f05-48f7-b74d-d052df2347d2',
      is_following: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      following_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
      user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
      is_following: false,
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
