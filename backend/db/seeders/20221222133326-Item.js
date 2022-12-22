

const { Item } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Item.bulkCreate([
      {
        name: 'Фурошик1',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
      {
        name: 'Фурошик2',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
      {
        name: 'Фурошик3',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
      {
        name: 'Фурошик4',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
      {
        name: 'Фурошик5',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
      {
        name: 'Фурошик6',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
      {
        name: 'Фурошик7',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
      {
        name: 'Фурошик8',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
      {
        name: 'Фурошик9',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
      {
        name: 'Фурошик10',
        price: 100,
        description: 'Сатиновый платок 75х75см',
        img: '/img/IMAGE 2021-11-25 01_57_59 1.png',
      },
    ], {});
  },

  async down() {
    await Item.destroy({ truncate: { cascade: true } });

  }
};
