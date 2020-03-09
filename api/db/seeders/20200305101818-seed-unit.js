'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('unit', [{
      unit_name: 'g',
      created_at: new Date(),
      updated_at: new Date()
    },
      {
        unit_name: 'ml',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        unit_name: 'piece(s)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        unit_name: 'l',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        unit_name: 'kg',
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
