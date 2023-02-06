'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert(
      "tbl_users",
      [
        {
          id:1,
          userId: 67320,
          fullName: "Ayam Rooster",
          userName: "ayam123",
          password: "rooster123",
          status: "single",
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id:2,
          userId: 78394,
          fullName: "Kelinci Rabbit",
          userName: "kelinci123",
          password: "rabbit123",
          status: "single",
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
        {
          id:3,
          userId: 804722,
          fullName: "Kucing Cat",
          userName: "kucing123",
          password: "cat123",
          status: "married",
          createdAt: "2022-10-14 21:15:22",
          updatedAt: "2022-10-14 21:15:22",
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("tbl_users", null, {});
  }
};
