const express = require('express');
const Author = require("../models/Author");
const Book = require('../models/Book');
const router = express.Router();

//Get
/*router.get('/', async (req,res) => {
    try{
        const authors = await Author.find()
        res.json(authors)
    }catch(err){
        res.json({message: err})
    }
});
//GET authors
router.get("/", async (req,res) => {
    try{
        const authors = await Author.find()
            res.json(authors)
        }catch(err){
            res.json({message: err})
        }
});

//POST authors
/*router.post('/', async (req, res) => {
    try{
    const createAuthor = await Author.create(req.body)
      res.json(createAuthor) 
        // If we were able to successfully create a Product, send it back to the client
    }catch(err){
        res.json({message: err})
    }
});

router.post('/:id', async(req,res)=>{
    Book.create(req.body).then(function(createdBook){
        return Author.findOneAndUpdate({_id: req.params.id},
            {
                $push: {books: createdBook._id}},{new:true});
    }).then(function(dbUsers){
        res.json(dbUsers);
    }).catch(function(err){
        res.json(err);
    });
});

router.get('/:authorId', async (req,res)=>{
    Author.findOne({_id: req.params.authorId}).populate('books').then(function(dbAuthors){
        res.json(dbAuthors);
    }).catch(function(err){
        res.json(err);
    });
});
//Get authors by ID
router.get("/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    Author.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("books")
      .then(function(author) {
        // If we were able to successfully find an Product with the given id, send it back to the client
        res.json(author);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  //Update authors
router.patch('/:authorId', async (req,res) => {
    try{
        const updatedAuthor = await Author.updateMany(
            {_id: req.params.authorId},
            {$set: { name: req.body.name, age: req.body.age}})
                book: [{
                    title: req.body.book.title, ISBN: req.body.book.ISBN, price: req.body.book.price}]}});
        res.json(updatedAuthor);
    }catch(err){
        res.json({message: err});
    }
})

//delete authors
router.delete('/:authorId', async (req,res)=> {
    try{
        const deletedAuthor = await Author.remove({ _id: req.params.authorId})
        res.json(deletedAuthor)
    }catch(err){
        res.json({message: err})
    }
})

router.post("/:id", function(req, res) {
    // Create a new note and pass the req.body to the entry
    Book.create(req.body)
      .then(function(book) {
        // If a Review was created successfully, find one Product with an `_id` equal to `req.params.id`. Update the Product to be associated with the new Review
        // { new: true } tells the query that we want it to return the updated Product -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        return Book.findOneAndUpdate({ _id: req.params.id }, {$push: {book: book._id}}, { new: true });
      })
      .then(function(book) {
        // If we were able to successfully update a Product, send it back to the client
        res.json(book);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });


router.get("/:id", async (req, res) => {
    try{
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    const findAuthor = await Author.findOne({ _id: req.params.id })
        console.log(findAuthor)
      // ..and populate all of the notes associated with it
      .populate("books")
      res.json(findAuthor)
      console.log(findAuthor)}
      catch(err){
        res.json({message: err})
      }
      /*try{
      const authorWithBooks = await Author.findOne({ _id: req.params.id })
        // If we were able to successfully find an Product with the given id, send it back to the client
    res.json(authorWithBooks);
    }catch(err){
        res.json({message: err});
    }
}); 

//Post
router.post('/', async (req,res) => {
    const authors = new Author({
        name: req.body.name,
        age: req.body.age,
        book:[{
            title: req.body.book.title,
            ISBN: req.body.book.ISBN,
            price: req.body.book.price
        }]
    });
    try{
        const authorSaved = await authors.save()
        res.json(authorSaved);
    }catch(err){
        res.json({message: err})}
});
*/
module.exports = router;