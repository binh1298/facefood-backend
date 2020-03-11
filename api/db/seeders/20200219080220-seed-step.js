'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [{
      post_id: 1,
      step_count: 1,
      description: 'Step 1: Be a Potato',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_1.jpg?alt=media&token=f8744384-1524-4fda-9d88-e385a6d9abd5',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 2,
      description: 'Step 2: Rolling the potato',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_3.jpg?alt=media&token=c9b36bc0-8ab2-4a90-9d94-8013a5ed40a8',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 3,
      description: 'Step 3: Roast the potato',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_4.jpg?alt=media&token=38458cfe-0098-4062-b324-0a96f3890788',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 4,
      description: 'Step 4: Roll the potato',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_6.jpg?alt=media&token=47e78846-0f08-426e-83b9-fbb41021240c',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 2,
      step_count: 1,
      description: 'Step 1: SpacePotato',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_other_1.jpg?alt=media&token=4eb68580-cf6f-4793-8ef1-892ef3fc9058',
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
