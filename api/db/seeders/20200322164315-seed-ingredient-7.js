'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredient', [
      {
        post_id: 7,
        ingredient_name: 'Rice',
        value: 2,
        unit_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        ingredient_name: 'Chicken thigh',
        value: 200,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        ingredient_name: 'Onion',
        value: 40,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        ingredient_name: 'Salad oil',
        value: 10,
        unit_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        ingredient_name: 'Egg (optional)',
        value: 2,
        unit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        ingredient_name: 'Chopped green onions (optional)',
        value: 2,
        unit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        ingredient_name: 'Soy sauce',
        value: 10,
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
