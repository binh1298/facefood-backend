'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('follow', [{
      follow_id: 1,
      following_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      follower_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      follow_id: 2,
      following_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      follower_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      follow_id: 3,
      following_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      follower_id: 'da9c7b32-0f05-48f7-b74d-d052df2347d2',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      follow_id: 4,
      following_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
      follower_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
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
