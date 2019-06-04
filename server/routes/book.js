const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// const bookCtrl  = require('../controllers/book'); doesnt works

router.get('', (req, res) => {
    Book.find({}, (err, allBooks) => {
        if(err) {
            return res.status(422).send(err);
        }
        return res.json(allBooks);
    })
});

router.post('', (req, res) => {
    const bookData = req.body;
    const book = new Book(bookData);

    book.save((err, createdBook) => {
        if(err) {
            return res.status(422).send(err);
        }
        return res.json(createdBook);
    })
});

router.patch('/:id', (req, res) => {
    const bookId = req.params.id;
    const bookData = req.body;

    Book.findById(bookId, (err, foundBook) => {
        if(err) {
            return res.status(422).send(err);
        }
        foundBook.set(bookData);
        foundBook.save((err, savedBook) => {
        if(err) {
            return res.status(422).send(err);
        }
        })
        return res.json(foundBook);
    })
});

router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    Book.deleteOne({_id: bookId}, (err, deletedBook) => {
        if(err) {
            return res.status(422).send(err);
        }
        return res.json({status: "DELETED"});
    })
});

module.exports = router;