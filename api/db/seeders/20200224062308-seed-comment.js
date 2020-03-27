'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comment', [
      {
        user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
        username: 'SpacePotato',
        post_id: 3,
        content: 'That looks delicious!',
        is_deleted: false,
        is_reported: false,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
        username: 'BinhPham',
        post_id: 1,
        content: 'Thank you for this post!',
        is_deleted: false,
        is_reported: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'bfad3537-875c-4bf2-bb97-41c00b912d76',
        username: 'Potato',
        post_id: 9,
        content: 'This post is very informational. But I think that there are things that can be improved, especially the ingredient measurements, which are a bit more than my taste. You can try to reduce the amount of potatoes to just 5.',
        is_deleted: false,
        is_reported: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'bfad3537-875c-4bf2-bb97-41c00b912d76',
        username: 'Potato',
        post_id: 1,
        content: 'This post is very informational. But I think the estimated time should be a bit longer.',
        is_deleted: false,
        is_reported: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
        post_id: 1,
        content: 'Can you record a video describing the steps? I have followed closely to the steps, but cannot replicate the dish somehow :(',
        is_deleted: false,
        is_reported: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'bfad3537-875c-4bf2-bb97-41c00b912d76',
        username: 'Potato',
        post_id: 2,
        content: 'I have tried this recipe, but no luck. Well, there is always next time!',
        is_deleted: false,
        is_reported: false,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
        post_id: 2,
        content: 'Followed the instructions, and the result is wonderful!',
        is_deleted: false,
        is_reported: false,
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
