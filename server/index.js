/* eslint-disable no-console */

const express = require('express');
const next = require('next');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const BodyParser = require('body-parser');

const routes = require('../routes');
const config = require('./config');

// SERVICES
const authService = require('./services/auth');

const bookRoutes = require('./routes/book');
const portfolioRoutes = require('./routes/portfolio');
const blogRoutes = require('./routes/blog');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

mongoose
  .connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('Database connected!'))
  .catch(err => console.error(err));

// async () => (await mongoose.connect(config.DB_URI, {useNewUrlParser: true}))();

const robotsOptions = {
  root: path.join(__dirname, '../static'),
  headers: {
    'Content-Type': 'text/plain; charset=UTF-8',
  },
};

const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans how to build spaceship',
  },
  {
    title: 'SecretData 2',
    description: 'My secret passwords',
  },
];

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(BodyParser.json());

    server.use('/api/v1/books', bookRoutes);
    server.use('/api/v1/portfolios', portfolioRoutes);
    server.use('/api/v1/blogs', blogRoutes);

    server.get('/robots.txt', (req, res) => {
      return res.status(200).sendFile('robots.txt', robotsOptions);
    });

    /**
     * Получаем данные от сервера при переходе по пути
     * Применяем миддлвейр authService, значение которого попадает в req
     */

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
      return res.json(secretData);
    });

    /**
     * Проверяем - есть ли доступ к странице для логина siteOwner
     */
    server.get(
      '/api/v1/onlysiteowner',
      authService.checkJWT,
      authService.checkRole('siteOwner'),
      (req, res) => {
        return res.json(secretData);
      }
    );

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.use(cors());

    // обрабатываем ошибки
    // server.use(function (err, req, res, next) {
    //   if (err.name === 'UnauthorizedError') {
    //     res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized access'})
    //   }
    // })

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on port${  PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
