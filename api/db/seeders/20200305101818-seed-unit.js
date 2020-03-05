'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('unit', [{
      unit_id: 1,
      unit_name: 'g',
      created_at: new Date(),
      updated_at: new Date()
    },
      {
        unit_id: 2,
        unit_name: 'ml',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        unit_id: 3,
        unit_name: 'piece(s)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        unit_id: 4,
        unit_name: 'l',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        unit_id: 5,
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
