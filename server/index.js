const express = require('express');
const next = require('next');
const routes = require('../routes');

const mongoose = require("mongoose");
const config = require('./config');
BodyParser = require('body-parser');

//SERVICES
const authService = require('./services/auth')

const bookRoutes = require('./routes/book');
const portfolioRoutes = require('./routes/portfolio');

var cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

mongoose.connect(config.DB_URI, {useNewUrlParser: true})
  .then(() => console.log('Database connected!'))
  .catch(err => console.error(err))

// async () => (await mongoose.connect(config.DB_URI, {useNewUrlParser: true}))();

const secretData = [
    {
        title: 'SecretData 1',
        description: 'Plans how to build spaceship'
    },
    {
        title: 'SecretData 2',
        description: 'My secret passwords'
    }
]

app.prepare()
.then(() => {
  const server = express();
  server.use(BodyParser.json());

  server.use('/api/v1/books', bookRoutes);
  server.use('/api/v1/portfolios', portfolioRoutes);

  /**
   * Получаем данные от сервера при переходе по пути
   * Применяем миддлвейр authService, значение которого попадает в req
   */  
  server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
    return res.json(secretData)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(cors())

  // обрабатываем ошибки
  // server.use(function (err, req, res, next) {
  //   if (err.name === 'UnauthorizedError') {
  //     res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized access'})
  //   }
  // })

  server.use(handle).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})