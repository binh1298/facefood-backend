'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredient', [{
      ingredient_id: 1,
      ingredient_name: 'Potato',
      value: 500,
      unit_id: 1,
      post_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
      {
        ingredient_id: 2,
        ingredient_name: 'Beef',
        value: 200,
        unit_id: 1,
        post_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        ingredient_id: 3,
        ingredient_name: 'Sauce',
        value: 100,
        unit_id: 2,
        post_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        ingredient_id: 4,
        ingredient_name: 'Salt',
        value: 10,
        unit_id: 1,
        post_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        ingredient_id: 5,
        ingredient_name: 'Cabbage',
        value: 1,
        unit_id: 3,
        post_id: 1,
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
