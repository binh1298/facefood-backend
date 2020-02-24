'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
      user_id: '468ab892-7518-4520-8243-db1c1b9607dd',
      username: 'SpacePotato',
      fullname: 'Hello Space Potato',
      password: 'potatopassword',
      email: 'space@potato.com',
      created_at: new Date(),
      updated_at: new Date(),
      role_id: 0
    },
      {
        user_id: 'bfad3537-875c-4bf2-bb97-41c00b912d76',
        username: 'Potato',
        fullname: 'Hello Potato',
        password: 'potatopassword',
        email: 'potato@potato.com',
        created_at: new Date(),
        updated_at: new Date(),
        role_id: 1
      },
      {
        user_id: '9903c282-06ed-48fe-9607-76e7903f6b72',
        username: 'BinhPham',
        fullname: 'Pham Duc Binh',
        password: 'binhphampassword',
        email: 'binh@pham.com',
        created_at: new Date(),
        updated_at: new Date(),
        role_id: 0
      },
      {
        user_id: 'ef71e125-37b5-4a5f-87e1-fdda43a4ccb2',
        username: 'DucPhi',
        fullname: 'Phi Do Hong Duc',
        password: 'ducphipassword',
        email: 'duc@phi.com',
        created_at: new Date(),
        updated_at: new Date(),
        role_id: 0
      },
      {
        user_id: 'da9c7b32-0f05-48f7-b74d-d052df2347d2',
        username: 'LocTran',
        fullname: 'Tran Thien Loc',
        password: 'loctranpassword',
        email: 'loc@tran.com',
        created_at: new Date(),
        updated_at: new Date(),
        role_id: 0
      }
    ]);
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
