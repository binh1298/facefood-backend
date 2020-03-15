'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [{
      post_id: 6,
      step_count: 1,
      description: 'Cut the minced meat into three equal parts.',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_1.jpg?alt=media&token=fbff377a-3bfa-4fd0-9f08-46724daa88a4',
      created_at: new Date(),
      updated_at: new Date()
    },
      {
        post_id: 6,
        step_count: 2,
        description: 'Add the water and blend. After loosening, drain the water and mix in 1 tablespoon of starch. Do not knead.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_2.jpg?alt=media&token=5435c741-bdd2-4495-b35a-dbe1a4c3d640',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 3,
        description: 'Divide the vermicelli into three equal parts (It is about 30 per soup. In case of ordinary vermicelli, please cut according to the size of the dish).',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_3.jpg?alt=media&token=c09d7ecb-8f6e-4cae-99b1-30165bbfbef5',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 4,
        description: 'Cut the carrot into pieces.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_4.jpg?alt=media&token=2f6810c1-8a6f-4288-872f-37c68f8222f7',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 5,
        description: 'Cut the sweet potato into about 5mm and soak in water.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_5.jpg?alt=media&token=c73a66e9-320f-4944-a701-8d76d1bbfc69',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 6,
        description: 'Eggplant should be cut into 1.5cm diagonally or randomly, soaked in water, drained and entangled with sesame oil.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_6.jpg?alt=media&token=fb8826f6-3ad2-422d-8b67-cc0e15fd62d1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 7,
        description: 'Sweet potatoes and carrots are placed on a heat-resistant dish and heated in a microwave oven at 500w for 6 minutes to remove coarse heat. (I recommend two dishes at once)',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_7.jpg?alt=media&token=eb25421e-22b3-4972-b6eb-11dc19e915a7',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 8,
        description: 'Wrap it softly and heat it up for 4 minutes.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_8.jpg?alt=media&token=5503f395-048a-4d96-b6a4-0ee5733e76f8',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 9,
        description: 'Lightly mix and put the peppers in three equal parts',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_9.jpg?alt=media&token=d26075a3-b128-4697-af9e-969e005d50d9',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 10,
        description: 'Wrap softly and heat for 1.5 minutes in a 600w range (we recommend 3 dishes at a time)',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_3%2Fpost_3_step_10.jpg?alt=media&token=3f255c6f-e4a0-4b93-baa2-f8cc8106b90c',
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
