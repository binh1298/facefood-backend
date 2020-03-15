'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [{
      post_id: 1,
      step_count: 1,
      description: 'Cut the potatoes into small pieces and boil in salted water. When it becomes soft, crush it with a masher while it is hot.',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_1.jpg?alt=media&token=f8744384-1524-4fda-9d88-e385a6d9abd5',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 2,
      description: 'Put the onion, minced meat and sauce in a frying pan, cook on medium heat. When the onions have softened and tasted, turn off the fire',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_3.jpg?alt=media&token=c9b36bc0-8ab2-4a90-9d94-8013a5ed40a8',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 3,
      description: 'Prepare batter and bread crumbs mixed with flour and water. Shape it round (Appropriate shape is OK)',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_4.jpg?alt=media&token=38458cfe-0098-4062-b324-0a96f3890788',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 1,
      step_count: 4,
      description: 'Add oil about 5 cm deep and heat to 170 degrees. Apply the batter solution and breadcrumbs in this order.Flatten and fry.',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fstep_potato_6.jpg?alt=media&token=47e78846-0f08-426e-83b9-fbb41021240c',
      created_at: new Date(),
      updated_at: new Date()
    },], {});
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
