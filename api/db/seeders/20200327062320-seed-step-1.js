'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [{
      post_id: 1,
      step_count: 1,
      description: 'Before you can start making your spaghetti you will need to first get the proper supplies and materials. You can use as much meat as you want, really.',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_9%2Fpost_1_revise_step_1.jpg?alt=media&token=01c6838b-2a39-4273-aa75-f58c4b49b4ac',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 2,
      description: 'You will need to cook the of meat. Take all of the meat out of its container and set it all in a large pan, then put the pan on the stove and set the stove to medium. After that you will need to break the meat into smaller pieces. ',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_9%2Fpost_1_revise_step_2.jpg?alt=media&token=0e6ef75e-8608-42e4-8db8-85fe67845d96',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 3,
      description: 'Next you will need to mix your marinara sauce with your cooked meat. Take your jar of marinara sauce and pour all of it on the cooked meat and then stir it all around until it is all blended together.',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_9%2Fpost_1_revise_step_3.jpg?alt=media&token=2878a547-de9e-4526-9f10-004db1d4351c',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 4,
      description: 'Once the water has come up to a boil, you can throw the spaghetti in. Typically it should cook within 7-11 minutes - just follow the time on the box!',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_9%2Fpost_1_revise_step_4.jpg?alt=media&token=78449d3a-6dba-44c9-b0b0-edd4c4210ea0',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 5,
      description: 'You can do this in a lot of ways but I prefer mixing the noodles in the pan with the sauce. I use tongs to drain the noodles and place them in the sauce, and then put in a couple spoons of pasta water.',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_9%2Fpost_1_revise_step_5.jpg?alt=media&token=8bac3b7d-0a85-490a-8d9f-dcdc18c613ef',
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
