'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [
      {
        post_id: 5,
        step_count: 1,
        description: 'Crush the banana and mix with yogurt.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_5%2Fpost_5_step_1.jpg?alt=media&token=24a39f22-5158-496f-bc64-0e7991348f9a',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 5,
        step_count: 2,
        description: 'Add the hot cake mix and mix well.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_5%2Fpost_5_step_1.jpg?alt=media&token=24a39f22-5158-496f-bc64-0e7991348f9a',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 5,
        step_count: 3,
        description: 'Put the butter in a heated frying pan, and pour the liquid into a round-shaped jar and bake.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_5%2Fpost_5_step_3.jpg?alt=media&token=0e3029c7-8fa5-4d94-b502-453f92eebf3d',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 5,
        step_count: 4,
        description: 'If the foam comes out, turn it over and bake it.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_5%2Fpost_5_step_4.jpg?alt=media&token=f3c39492-c867-43ae-b018-24d4d035996f',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 5,
        step_count: 5,
        description: 'The thickness is like this ♪ (one piece about 2㎝)',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_5%2Fpost_5_step_5.jpg?alt=media&token=c345d787-1d7c-46ef-9fa2-a6f061e0d782',
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
