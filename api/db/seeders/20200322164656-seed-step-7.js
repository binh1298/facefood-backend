'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [
      {
        post_id: 7,
        step_count: 1,
        description: 'Chicken thighs are bite-sized , and onions are sliced 5 cm wide.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_7%2Fpost_7_step_1.jpg?alt=media&token=2d9383ac-36c1-4515-98ea-a2ed15de9860',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        step_count: 2,
        description: 'Spread salad oil in a frying pan and fry one chicken thigh. If it goes well, add 1 onion and fry.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_7%2Fpost_7_step_2.jpg?alt=media&token=75fdcf61-ffaa-41e0-8563-a54687e359e3',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        step_count: 3,
        description: 'Fry until juice is gone.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_7%2Fpost_7_step_3.jpg?alt=media&token=5d03a93a-6d7b-40fc-b37f-636e12ca39d1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        step_count: 4,
        description: 'Put 3 on rice and put hot spring egg and chopped green onions as you like.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_7%2Fpost_7_step_4.jpg?alt=media&token=1e5cae04-24d9-4871-b32c-6cfd87fa69dd',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 7,
        step_count: 5,
        description: 'Completed! ♡',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_7%2Fpost_7_step_5.jpg?alt=media&token=ea2ce7ed-1392-4c26-8731-f25673dfcd72',
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
