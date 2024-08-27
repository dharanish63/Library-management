const express = require('express')
const control_book = require('../Controllers/control_book')
const router = express.Router();
//read the book
router.get('/book',control_book.read)
//create the book
router.post('/book',control_book.create)
//update the book
router.put('/book/:id',control_book.update)
//delete the book
router.delete('/book/:id',control_book.deleted)
//export the object
module.exports = router;