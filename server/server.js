const express = require('express');
const next = require('next');
const routes = require('../routes');

const mongoose = require("mongoose");
const config = require('./config');
BodyParser = require('body-parser');


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

app.prepare()
.then(() => {
  const server = express();
  server.use(BodyParser.json());

  server.use('/api/v1/books', bookRoutes);
  server.use('/api/v1/portfolios', portfolioRoutes);

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(cors())

  server.use(handle).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})