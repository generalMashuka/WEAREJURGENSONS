require('dotenv').config();
const express = require('express');
const expressConfig = require('./config/express');
const itemsRouter = require('./routes/items.routes')
const categoriesRouter = require('./routes/categories.routes')

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use('/api/items', itemsRouter);
app.use('/api/categories', categoriesRouter);

// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`));
