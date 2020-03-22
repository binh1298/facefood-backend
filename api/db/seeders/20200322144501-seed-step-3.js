'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [
      {
        post_id: 3,
        step_count: 1,
        description: 'Mince the garlic and onion. Peel the avocado skin, roughly cut it into a bowl and crush with a fork.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_1.jpg?alt=media&token=99fa20f0-b414-4f90-9bbd-d7c79346e4f7',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 3,
        step_count: 2,
        description: 'When all the ingredients are mixed, the guacamole is completed ♪',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_2.jpg?alt=media&token=7a8c893f-3693-4065-8f34-597f4cd8c38d',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 3,
        step_count: 3,
        description: 'Put it on your favorite bread thickly, do your favorite topping, and toast it brown ♪',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_3.jpg?alt=media&token=fa9680f4-28b1-4819-9aeb-89d3513db9fe',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 3,
        step_count: 4,
        description: '[Additional] Even if you mix the chopped tomatoes, it is more delicious to remove the  seeds! ♡',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_4.jpg?alt=media&token=4f64901a-654b-4e56-abff-858480f9ee72',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 3,
        step_count: 5,
        description: 'We were featured in Facefood! ♡',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_5.jpg?alt=media&token=d56523ab-cab1-4f5c-b6f9-d6f39530e846',
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
