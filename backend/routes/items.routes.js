const itemsRouter = require('express').Router();

const { Item } = require('../db/models');

itemsRouter.get('/', async (req, res) => {
try {const items = await Item.findAll({
  order: [
    ['createdAt', 'DESC'],
    ['id', 'DESC'],
  ],
});
res.json(items)
} catch (error) {
    res.status(501).json({ error: 'ошибка БД'})
  }
});

itemsRouter.delete('/:id', async (req, res) => {
  try {
    // удаляем задачу с заданным id
    const removedCount = await Item.destroy({
      where: {
        // в req.params.id ляжет соответсвующая часть URL
        id: Number(req.params.id),
      },
    });

    if (removedCount === 0) {
      res.status(404).json({ success: false, message: 'Нет такого продукта' });
    } else {
      // res.json({ success: true });
      res.json(req.params.id)
    }
  } catch (error) {
    res.status(501).json({ error: 'ошибка БД'})
  }
});


module.exports = itemsRouter;