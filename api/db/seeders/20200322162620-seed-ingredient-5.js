'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ingredient', [
      {
        post_id: 5,
        ingredient_name: 'Hot cake mix',
        value: 100,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 5,
        ingredient_name: 'Banana (blended)',
        value: 100,
        unit_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 5,
        ingredient_name: 'Yogurt',
        value: 60,
        unit_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 5,
        ingredient_name: 'Butter (margarine)',
        value: 1,
        unit_id: 3,
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
