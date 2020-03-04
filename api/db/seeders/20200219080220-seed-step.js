'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [{
      step_id: 1,
      post_id: 1,
      step_count: 1,
      description: 'Step 1: Be a Potato',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      step_id: 2,
      post_id: 1,
      step_count: 2,
      description: 'Step 2: Rolling the potato',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      step_id: 3,
      post_id: 1,
      step_count: 3,
      description: 'Step 3: Roast the potato',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      step_id: 4,
      post_id: 1,
      step_count: 4,
      description: 'Step 4: Hello World',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      step_id: 5,
      post_id: 2,
      step_count: 1,
      description: 'Step 1: SpacePotato',
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
