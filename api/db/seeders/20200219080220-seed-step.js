'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [{
      step_id: '5ebced53-61ea-4b16-9d45-719cc666332b',
      post_id: 'e0bd0406-e5a7-48db-9246-d66a17814d70',
      description: 'Step 1: Be a Potato',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      step_id: '274d4a4f-5ea7-4e47-b2a4-de4eff917904',
      post_id: 'e0bd0406-e5a7-48db-9246-d66a17814d70',
      description: 'Step 2: Rolling the potato',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      step_id: '9da16499-dacd-4c3f-8d34-3e8e3bf45d8f',
      post_id: 'e0bd0406-e5a7-48db-9246-d66a17814d70',
      description: 'Step 3: Roast the potato',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      step_id: 'c42002b4-2670-4f5a-a6e2-128366411e4d',
      post_id: '002cf14a-9cab-42fc-aa9a-502ee7e2dd22',
      description: 'Step 4: Hello World',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      step_id: '7424097d-d4f1-46b3-a143-2104574f65ce',
      post_id: '002cf14a-9cab-42fc-aa9a-502ee7e2dd22',
      description: 'Step 5: SpacePotato',
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
