'use strict';

const { Category } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Category.bulkCreate([
      {
        name: 'Изделия из дерева',
        img: '/img/IMAGE 2021-11-25 01_50_19 2.png'
      },
      {
        name: 'Ковры',
        img: '/img/1642908241_5-abrakadabra-fun-p-setka-tetradi-v-kletku-8.png'
      },
      {
        name: 'Керамика',
        img: '/img/IMG_4796 4.png'
      },
      {
        name: 'Текстиль',
        img: '/img/IMG_5330 1.png'
      },
    ], {});
  },

  async down () {
    await Category.destroy({ truncate: { cascade: true } });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
