'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [{
      post_id: 2,
      step_count: 1,
      description: 'Cut the potatoes into bite-sized pieces and boil for 15-20 minutes.',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_2%2Fpost_2_step_1.jpg?alt=media&token=aa2a2b02-c5be-4712-9212-18542111ca96',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 2,
      step_count: 2,
      description: 'When you are done boiling, drain it and crush it. Add the salt and pepper of your choice and mix.',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_2%2Fpost_2_step_2.jpg?alt=media&token=05ad5492-3d9e-405b-ab87-ee0ad9530073',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 2,
      step_count: 3,
      description: 'Add oil to a frying pan and fry minced onions and ground chicken',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_2%2Fpost_2_step_3.jpg?alt=media&token=8a4ca33b-0821-4520-9603-d5314eb890ab',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 2,
      step_count: 4,
      description: 'When the color of the minced meat turns white, mix well',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_2%2Fpost_2_step_4.jpg?alt=media&token=c882bc2a-d205-494f-bc25-9ac707d6578f',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      post_id: 2,
      step_count: 5,
      description: 'Mold into an oval mold. Eight croquettes with a length of about 7cm and a thickness of about 1cm',
      image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_2%2Fpost_2_step_5.jpg?alt=media&token=a2ca9af4-0004-4d11-b8a6-29cf00b706be',
      created_at: new Date(),
      updated_at: new Date()
    },
      {
        post_id: 2,
        step_count: 6,
        description: 'Leave it for about 10 minutes so that the bread crumbs can be used. Put the oil of about 5mm deep in a fryer or pan and fry.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_2%2Fpost_2_step_6.jpg?alt=media&token=25e43623-c8b2-4ef8-a946-4cf2aa85268f',
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
