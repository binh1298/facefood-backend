'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredient', [
      {
        post_id: 1,
        ingredient_name: 'Spaghetti',
        value: 500,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 1,
        ingredient_name: 'Jar of marinara sauce',
        value: 1,
        unit_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 1,
        ingredient_name: 'Beef',
        value: 450,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 1,
        ingredient_name: 'Salt',
        value: 10,
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
