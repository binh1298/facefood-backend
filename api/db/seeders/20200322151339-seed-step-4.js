'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step', [
      {
        post_id: 4,
        step_count: 1,
        description: 'Wash the cabbage clean, then cut off the core. Shred the leaves.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_4%2Fpost_4_step_1.jpg?alt=media&token=447f58c5-1277-4fbb-becb-89ff299a9267',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        step_count: 2,
        description: 'Put the shredded leaves into a bowl. Put the mayonnaise inside the bowl.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_4%2Fpost_4_step_2.jpg?alt=media&token=3863640f-89b2-4dea-a9fe-08b9df0138d5',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        step_count: 3,
        description: 'If you leave it for a few minutes, it will become soft and easy to mix it. In the meantime, prepare a pan.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_4%2Fpost_4_step_3.jpg?alt=media&token=42dfe6d5-e980-4a4f-b3c8-a0a937e3c48d',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        step_count: 4,
        description: 'Put the cheese on one sheet, and put the bacon slice on it. Since the cheese plays the role of a glue, be sure to put it in this order.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_4%2Fpost_4_step_4.jpg?alt=media&token=08cb15c7-3c67-4b69-a7b7-32ce4073b2f3',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        step_count: 5,
        description: 'Bake two pieces with the toast function of the oven toaster. When it is baked, apply the granulated paste to the pan with nothing attached',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_4%2Fpost_4_step_5.jpg?alt=media&token=9bb36ade-70e8-44c8-ae07-22aee79a532c',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        step_count: 6,
        description: 'Put all the shredded on the master slice. It is hard to collapse when it is put at the center.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_4%2Fpost_4_step_6.jpg?alt=media&token=0a02353b-a00f-4d40-aa0d-ede67f6969d2',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        step_count: 7,
        description: 'Press firmly from above with the pan on which the cheese & bacon is on. If the building protrudes from the side, push it inside.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_4%2Fpost_4_step_7.jpg?alt=media&token=637bacb2-a7f6-4a88-8915-304141655b57',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        step_count: 8,
        description: 'Gently turn over and wrap the wrap tightly by pulling it slightly. Leave for a few minutes.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_4%2Fpost_4_step_8.jpg?alt=media&token=0e6940ec-d954-4e0e-8b6a-f785807146fa',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        post_id: 4,
        step_count: 9,
        description: 'Cut in half with a knife that can be cut well while wrapped in a wrap. Remove the wrap when eating. If you go out, you can eat while removing the wrap.',
        image_url: 'https://firebasestorage.googleapis.com/v0/b/facefood-41e90.appspot.com/o/steps%2Fpost_4%2Fpost_4_step_9.jpg?alt=media&token=725ceb44-1161-49e6-afe4-4ad1064a6f0b',
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
