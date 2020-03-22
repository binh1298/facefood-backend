'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredient', [
      {
        post_id: 8,
        ingredient_name: 'Unsweetened yogurt',
        value: 500,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 8,
        ingredient_name: 'Water',
        value: 400,
        unit_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 8,
        ingredient_name: 'Sugar',
        value: 55,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 8,
        ingredient_name: 'Powder',
        value: 8,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 8,
        ingredient_name: 'Fruit',
        value: 220,
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
