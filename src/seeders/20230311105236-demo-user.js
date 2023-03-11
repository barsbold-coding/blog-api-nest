const bcrypt = require('bcrypt');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    .*/
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Gino',
        lastName: 'Dollard',
        email: 'gdollard0@mail.ru',
        username: 'gdollard0',
        phoneNumber: '9109063759',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
      {
        firstName: 'Isahella',
        lastName: 'Massingham',
        email: 'imassingham1@jugem.jp',
        username: 'imassingham1',
        phoneNumber: '9323214804',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
      {
        firstName: 'Ofella',
        lastName: 'McArtan',
        email: 'omcartan2@netscape.com',
        username: 'omcartan2',
        phoneNumber: '2505450215',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
      {
        firstName: 'Horton',
        lastName: 'Teasdale-Markie',
        email: 'hteasdalemarkie3@domainmarket.com',
        username: 'hteasdalemarkie3',
        phoneNumber: '7898446447',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
      {
        firstName: 'Ryun',
        lastName: 'Currer',
        email: 'rcurrer4@msu.edu',
        username: 'rcurrer4',
        phoneNumber: '4947332185',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
      {
        firstName: 'Odetta',
        lastName: 'Cardus',
        email: 'ocardus5@answers.com',
        username: 'ocardus5',
        phoneNumber: '4909809465',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
      {
        firstName: 'Lorri',
        lastName: 'Josephson',
        email: 'ljosephson6@hostgator.com',
        username: 'ljosephson6',
        phoneNumber: '5133348514',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
      {
        firstName: 'Georgi',
        lastName: 'Maun',
        email: 'gmaun7@cnbc.com',
        username: 'gmaun7',
        phoneNumber: '4568618566',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
      {
        firstName: 'Irvine',
        lastName: 'Ambrogetti',
        email: 'iambrogetti8@amazon.co.uk',
        username: 'iambrogetti8',
        phoneNumber: '6056939276',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
      {
        firstName: 'Cristionna',
        lastName: 'Stanley',
        email: 'cstanley9@cornell.edu',
        username: 'cstanley9',
        phoneNumber: '1496507911',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: await bcrypt.hash('coolpassword', await bcrypt.genSalt()),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
