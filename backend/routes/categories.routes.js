const categoryRouter = require('express').Router();

const { Category } = require('../db/models');

categoryRouter.get('/', async ( req, res ) => {
    try {
        const categories = await Category.findAll({
            order: [
                ['createdAt', 'DESC'],
                ['id', 'DESC'],
              ],
        });
        console.log(categories);
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Непредвиденная ошибка сервера' });
    }
})

module.exports = categoryRouter;