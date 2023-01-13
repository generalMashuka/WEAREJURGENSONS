

const { Item } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Item.bulkCreate([
      {
        name: 'Фурошик "Цветок"',
        price: 1000,
        description: '1Сатиновый платок 75х75см',
        img: '/img/furoshik.jpg',
        category_id: 4,
      },
      {
        name: 'Фурошик "Клетка"',
        price: 1000,
        description: '2Сатиновый платок 75х75см',
        img: '/img/furoshik2.jpg',
        category_id: 4,
      },
      {
        name: 'Фурошик "Снежинки"',
        price: 1000,
        description: '3Сатиновый платок 75х75см',
        img: '/img/4119845A-32CB-4480-8806-7C226B2EDFC3_1_201_a.jpeg',
        category_id: 4,
      },
      {
        name: 'Фурошик "Полоски"',
        price: 1000,
        description: '4Сатиновый платок 75х75см',
        img: '/img/655647E7-1C4E-40CE-A8FD-F0C0C5948137.JPG',
        category_id: 4,
      },
      {
        name: 'Фурошик "Цветы"',
        price: 1000,
        description: '5Сатиновый платок 75х75см',
        img: '/img/8ECA3083-A6ED-4C15-A3C9-44B5C6F8B989.JPG',
        category_id: 4,
      },
      {
        name: 'Фурошик "Звездочки"',
        price: 1000,
        description: '6Сатиновый платок 75х75см',
        img: '/img/furoshik3.jpg',
        category_id: 4,
      },
      {
        name: 'Коврик "Цветочек"',
        price: 3000,
        description: '7Сатиновый платок 75х75см',
        img: 'https://ae04.alicdn.com/kf/He9e8e03a08de426d89945ac9220e83eex.jpg_350x350.jpg',
        category_id: 2,
      },
      {
        name: 'Коврик "Клетка"',
        price: 2800,
        description: '8Сатиновый платок 75х75см',
        img: 'https://ae04.alicdn.com/kf/Sbd624d2c60a249608c5c2632c3cd745fx.jpg_350x350.jpg',
        category_id: 2,
      },
      {
        name: 'Коврик "Фигуры"',
        price: 3900,
        description: '9Сатиновый платок 75х75см',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXi_EYY0x5gfTnIJRIwZCXCEOt6D2q2MRdQ&usqp=CAU',
        category_id: 2,
      },
      {
        name: 'Поднос "Лист"',
        price: 1800,
        description: 'Размер: 20x30x2см, материал: грецкий орех',
        img: 'https://vetermagazine.ru/wp-content/uploads/2021/09/podnos-kruglyj-29sm-palka.jpg',
        category_id: 1,
      },
      {
        name: 'Ложка "Специи"',
        price: 1700,
        description: 'Размер: 20x2см, материал: дуб',
        img: 'https://vetermagazine.ru/wp-content/uploads/2022/08/lozhka-dlja-specij-eco-family-shop.jpg',
        category_id: 1,
      },
      {
        name: 'Совок "Лес"',
        price: 2100,
        description: 'Размер: 20x30x2см, материал: дуб',
        img: 'https://vetermagazine.ru/wp-content/uploads/2022/12/sovok-palka-store.jpg',
        category_id: 1,
      },
      {
        name: 'Доска "Круг"',
        price: 100,
        description: 'Размер: Диаметр: 30см, материал: дуб',
        img: 'https://vetermagazine.ru/wp-content/uploads/2022/09/doska-kruglaja-30sm-fish-wood.jpg',
        category_id: 1,
      },
      {
        name: 'Сахарница "Иней"',
        price: 3100,
        description: 'Размер: 20x30x2см, материал: керамика',
        img: 'https://vetermagazine.ru/wp-content/uploads/2022/08/banka-keramicheskaja-inej-tiss-pottery.jpg',
        category_id: 3,
      },
      {
        name: 'Ваза "Шар"',
        price: 3400,
        description: 'Размер: диаметр: 30см, материал: керамика',
        img: 'https://vetermagazine.ru/wp-content/uploads/2022/08/vaza-sfera-bezhevaja-bolshaja-volshebno-tut.jpg',
        category_id: 3,
      },
      {
        name: 'Стаканы "Река"',
        price: 2100,
        description: 'Размер: 10x15см, материал: керамика',
        img: 'https://vetermagazine.ru/wp-content/uploads/2022/08/stakan-marokanskij-100ml-folkva-2.jpg',
        category_id: 3,
      },
      {
        name: 'Тарелки "Слой"',
        price: 3100,
        description: 'Размер: 20x30, материал: керамика',
        img: 'https://vetermagazine.ru/wp-content/uploads/2021/11/tarelka-cookies-sugarpine-1.jpg',
        category_id: 3,
      },
      {
        name: 'Доска "Бланк"',
        price: 1500,
        description: 'Размер: 20x30x2см, материал: керамика',
        img: 'https://vetermagazine.ru/wp-content/uploads/2021/11/podstavka-dlja-blagovonij-desert-sugarpine.jpg',
        category_id: 3,
      },
    ], {});
  },

  async down() {
    await Item.destroy({ truncate: { cascade: true } });

  }
};
