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



module.exports = itemsRouter;