const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

/*router.get("/", async (req,res) => {
    try{
        const books = await Book.find()
            res.json(books)
        }catch(err){
            res.json({message: err})
        }
  });

router.delete('/:bookId', async (req,res)=> {
    try{
        const deletedBook = await Book.remove({ _id: req.params.bookId})
        res.json(deletedBook)
    }catch(err){
        res.json({message: err})
    }
})

/*router.post("/:id", async (req, res) => {
    try{
    const createBook = await Book.create(req.body)
    res.json(createBook)
    const insertBook = await Author.findOneAndUpdate({ _id: req.params.id }, {$push: {book: createBook._id}}, { new: true });
    res.json(insertBook)
    }catch(err){
        res.json({message: err})
    }
});*/

/*router.post("/:id", async (req, res) => {
    try{
    const createBook = Book.create(req.body)
    res.json(createBook)
    const insertBook = Author.findOneAndUpdate({ _id: req.params.id }, {$push: {books: createBook._id}}, { new: true });
    res.json(insertBook)
    }catch(err){
        res.json({message: err})
    }
  });
*/
//Post
/*router.post('/', async (req,res) => {
    const book = new Book({
        title: req.body.title,
        ISBN: req.body.ISBN,
        price: req.body.price
    });
    try{
        const bookSaved = await book.save()
        res.json(bookSaved);
    }catch(err){
        res.json({message: err})}
});

//Delete
router.delete('/:postId', async (req,res)=> {
    try{
        const deletedBook = await Book.remove({ _id: req.params.postId})
        res.json(deletedBook)
    }catch(err){
        res.json({message: err})
    }
})
*/
//Update
/*router.patch('/:postId', async (req,res) => {
    try{
        const updatedBook = await Book.updateMany(
            {_id: req.params.postId},
            {$set: { title: req.body.title, ISBN: req.body.ISBN, price: req.body.price}});
        res.json(updatedBook);
    }catch(err){
        res.json({message: err});
    }
})
*/
module.exports = router;