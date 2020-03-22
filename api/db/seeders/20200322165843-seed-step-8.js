'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [
      {
        post_id: 8,
        step_count: 1,
        description: 'Put yogurt in a bowl. Mix with a spoon and smoothen, add syrup cut fruit and mix well.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_8%2Fpost_8_step_1.jpg?alt=media&token=459e7f03-1a72-41d7-9011-9957dbd22fbc',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 8,
        step_count: 2,
        description: 'Put water and powder in a small pan and mix well. Weak medium heat.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_8%2Fpost_8_step_2.jpg?alt=media&token=17889609-ead2-4290-81c5-a20b025234a3',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 8,
        step_count: 3,
        description: 'Once the powder has melted, add the sugar and mix. Mix well in the bowl of 1 immediately. (If it is not quick, it will harden).',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_8%2Fpost_8_step_3.jpg?alt=media&token=cf3cea0b-170a-49c2-9598-f1aac23dc23d',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 8,
        step_count: 4,
        description: 'Lightly wet the mold with water and quickly put it into the mold. If there is no sink, a tapper is OK. Once the heat has been removed, cool it in the refrigerator.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_8%2Fpost_8_step_4.jpg?alt=media&token=6a407286-5492-4e13-a8de-523b19e4e2f2',
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
