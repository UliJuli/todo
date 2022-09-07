require('dotenv').config();
require('@babel/register');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const app = express();

const session = require('express-session');

//импорт вспомогательных ф-й
const dbCheck = require('./src/db/dbCheck');
const sessionConfig = require('./lib/sessionConfig')

const corsOptions = {
  credentials: true, 
  origin: 'http://localhost:3000' // адрес сервера React
}
app.use(cors(corsOptions));

// импорт роутов
const homeRoutes = require('./src/routes/homeRoutes');
const { isTimeout } = require('./src/middlewares/settimeout');

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

// искуственная задержка
app.use(isTimeout)

//роутеры
app.use('/', homeRoutes);

const PORT = process.env.PORT || 3100;


app.listen(PORT, async () => {
  try {
    await dbCheck();
    console.log(`Сервер запущен на http://localhost:${PORT} `);
  } catch {
    console.log('Ошибка запуска сервера.', err.message)
  }
});
