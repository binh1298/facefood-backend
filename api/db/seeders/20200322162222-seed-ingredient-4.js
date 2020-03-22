'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredient', [
      {
        post_id: 4,
        ingredient_name: 'Bread',
        value: 2,
        unit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        ingredient_name: 'Cabbage (medium-sized)',
        value: 1,
        unit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        ingredient_name: 'Bacon',
        value: 100,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        ingredient_name: 'Sliced cheese',
        value: 1,
        unit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        ingredient_name: 'Mayonnaise',
        value: 30,
        unit_id: 2,
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
