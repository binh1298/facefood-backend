'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [{
      post_id: 6,
      step_count: 1,
      description: 'Cut the minced meat into three equal parts.',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_1.jpg?alt=media&token=a1d33ad2-949f-4f6e-bab4-c1599422806c',
      created_at: new Date(),
      updated_at: new Date()
    },
      {
        post_id: 6,
        step_count: 2,
        description: 'Add the water and blend. After loosening, drain the water and mix in 1 tablespoon of starch. Do not knead.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_2.jpg?alt=media&token=08d8701b-2d10-4038-a1f9-990ffa73c17d',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 3,
        description: 'Divide the vermicelli into three equal parts (It is about 30 per soup. In case of ordinary vermicelli, please cut according to the size of the dish).',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_3.jpg?alt=media&token=17cf3a33-6476-46ce-8150-b087f18161bb',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 4,
        description: 'Cut the carrot into pieces.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_4.jpg?alt=media&token=422e1d0a-599e-401e-9e51-57ffd15078aa',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 5,
        description: 'Cut the sweet potato into about 5mm and soak in water.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_5.jpg?alt=media&token=ef2a3e58-247a-47e7-b793-1006b3cdb83d',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 6,
        description: 'Eggplant should be cut into 1.5cm diagonally or randomly, soaked in water, drained and entangled with sesame oil.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_6.jpg?alt=media&token=60e6aa74-5787-46ca-a574-431ef7771e53',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 7,
        description: 'Sweet potatoes and carrots are placed on a heat-resistant dish and heated in a microwave oven at 500w for 6 minutes to remove coarse heat. (I recommend two dishes at once)',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_7.jpg?alt=media&token=8a242801-c817-415d-951d-84084d5dce0a',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 8,
        description: 'Wrap it softly and heat it up for 4 minutes.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_8.jpg?alt=media&token=e4818f04-f0d9-4cd0-be6f-a2bd32cd0b9b',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 9,
        description: 'Lightly mix and put the peppers in three equal parts',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_9.jpg?alt=media&token=486e78d9-34f2-47ed-9c8a-f41ea97a2295',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 6,
        step_count: 10,
        description: 'Wrap softly and heat for 1.5 minutes in a 600w range (we recommend 3 dishes at a time)',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_6%2Fpost_6_step_10.jpg?alt=media&token=db7af953-b423-4341-84cd-6d689c07cb4d',
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
