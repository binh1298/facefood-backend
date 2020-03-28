'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredient', [
      {
        post_id: 9,
        ingredient_name: 'Potato',
        value: 6,
        unit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 9,
        ingredient_name: 'Onion',
        value: 1,
        unit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 9,
        ingredient_name: 'Minced meat',
        value: 100,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 9,
        ingredient_name: 'Sukiyaki sauce',
        value: 75,
        unit_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 9,
        ingredient_name: 'Bread crumbs',
        value: 20,
        unit_id: 1,
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
