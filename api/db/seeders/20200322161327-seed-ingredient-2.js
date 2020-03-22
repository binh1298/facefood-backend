'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredient', [
      {
        post_id: 2,
        ingredient_name: 'Potato',
        value: 500,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 2,
        ingredient_name: 'Onion',
        value: 80,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 2,
        ingredient_name: 'Chicken',
        value: 150,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 2,
        ingredient_name: 'Rice oil',
        value: 10,
        unit_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 2,
        ingredient_name: 'Flour',
        value: 30,
        unit_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 2,
        ingredient_name: 'Egg',
        value: 1,
        unit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 2,
        ingredient_name: 'Bread crumbs',
        value: 20,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 2,
        ingredient_name: 'Rice oil (for frying)',
        value: 200,
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
