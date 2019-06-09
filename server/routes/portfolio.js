const express = require('express');

const router = express.Router();
const Portfolio = require('../models/portfolio');
const authService = require('../services/auth');

// doesnt works
// const portfolioCtrl  = require('../controllers/Portfolio');
// router.post('', authService.checkJWT, authService.checkRole('siteOwner'), portfolioCtrl.savePortfolio)
// router.get('', authService.checkJWT, authService.checkRole('siteOwner'), portfolioCtrl.savePortfolio)

router.get('', (req, res) => {
  Portfolio.find({})
    .sort({ startDate: 1 })
    .exec((err, allPortfolios) => {
      if (err) {
        return res.status(422).send(err);
      }
      const body = res.json(allPortfolios);
      return body;
    });
});

// удаляем значения __v которые пишет mongo так как они не проходят валидацию
router.get(
  '/:id',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  (req, res) => {
    const portfolioId = req.params.id;

    Portfolio.findById(portfolioId)
      .select('-__v')
      .exec((err, foundPortfolio) => {
        if (err) {
          return res.status(422).send(err);
        }
        return res.json(foundPortfolio);
      });
  }
);

router.post(
  '',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  (req, res) => {
    const portfolioData = req.body;
    const userId = req.user && req.user.sub;
    const portfolio = new Portfolio(portfolioData);
    portfolio.userId = userId;

    portfolio.save((err, createdPortfolio) => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json(createdPortfolio);
    });
  }
);

router.patch(
  '/:id',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  (req, res) => {
    const portfolioId = req.params.id;
    const portfolioData = req.body;

    Portfolio.findById(portfolioId, (err, foundPortfolio) => {
      if (err) {
        return res.status(422).send(err);
      }
      foundPortfolio.set(portfolioData);
      foundPortfolio.save((error, savedPortfolio) => {
        if (error) {
          return res.status(422).send(error);
        }
      });
      return res.json(foundPortfolio);
    });
  }
);

router.delete(
  '/:id',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  (req, res) => {
    const portfolioId = req.params.id;
    Portfolio.deleteOne({ _id: portfolioId }, (err, deletedPortfolio) => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json({ status: 'DELETED' });
    });
  }
);

module.exports = router;
