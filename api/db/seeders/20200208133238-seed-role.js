'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role', [{
      role_id: 0,
      role_name: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      role_id: 1,
      role_name: 'user',
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
