const express = require('express');
const mongoose = require('mongoose')
const app = express();
const Book = require("./models/Book")
const Author = require("./models/Author");
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
require('dotenv/config')
app.use(express.urlencoded())
app.use(express.json())

const booksRoute = require('./routes/books')
const authorsRoute = require('./routes/authors');
app.use('/books', booksRoute)
app.use('/authors', authorsRoute)

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
    },
  },
  apis: ['index.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /authors:
 *  get:
 *    tags:
 *      - API Requests
 *    summary: Get all authors
 *    responses:
 *      '200':
 *        description: Success
 */
app.get("/authors", async (req,res) => {
  try{
      const authors = await Author.find()
          res.json(authors)
      }catch(err){
          res.json({message: err})
      }
});

/** 
 * @swagger
 * /books:
 *  get:
 *    tags:
 *      - API Requests
 *    summary: Get all books
 *    responses:
 *      '200':
 *        description: Success
 */

app.get("/books", async (req,res) => {
  try{
      const books = await Book.find()
          res.json(books)
      }catch(err){
          res.json({message: err})
      }
});


/**
 * @swagger
 * /authors:
 *  post:
 *    tags:
 *      - API Requests
 *    summary: add a new author
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object  
 *            properties:
 *              name:
 *                type: string
 *              age:
 *                type: integer
 *    responses:
 *      '200':
 *        description: OK
 * 
 */

app.post('/authors', async (req, res) => {
  try{
  const createAuthor = await Author.create(req.body)
    res.json(createAuthor) 
  }catch(err){
      res.json({message: err})
  }
});

/**
 * @swagger
 * /authors/{id}:
 *  post:
 *    tags:
 *      - API Requests
 *    summary: add a new book to an author
 *    parameters:
 *      - in: path
 *        name: id
 *        type: string
 *        description: author ID
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object  
 *            properties:
 *              title:
 *                type: string
 *              ISBN:
 *                type: integer
 *              price:
 *                type: integer
 *    responses:
 *      '200':
 *        description: OK
 */

app.post('/authors/:id', async(req,res)=>{
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

/**
 * @swagger
 * /authors/{id}:
 *  patch:
 *    tags:
 *      - API Requests
 *    summary: update an author
 *    parameters:
 *      - in: path
 *        name: id
 *        type: string
 *        description: author ID
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object  
 *            properties:
 *              name:
 *                type: string
 *              age:
 *                type: integer
 *    responses:
 *      '200':
 *        description: OK
 */

app.patch('/authors/:authorId', async (req,res) => {
  try{
      const updatedAuthor = await Author.updateMany(
          {_id: req.params.authorId},
          {$set: { name: req.body.name, age: req.body.age}})
              /*book: [{
                  title: req.body.book.title, ISBN: req.body.book.ISBN, price: req.body.book.price}]}});*/
      res.json(updatedAuthor);
  }catch(err){
      res.json({message: err});
  }
})

/**
 * @swagger
 * /authors/{id}:
 *  delete:
 *    tags:
 *      - API Requests
 *    summary: delete an author
 *    parameters:
 *      - in: path
 *        name: id
 *        type: string
 *        description: author ID
 *    responses:
 *      '200':
 *        description: OK
 */

app.delete('/authors/:id', async (req,res)=> {
  try{
      const deletedAuthor = await Author.remove({ _id: req.params.id})
      res.json(deletedAuthor)
  }catch(err){
      res.json({message: err})
  }
})

/**
 * @swagger
 * /books/{id}:
 *  patch:
 *    tags:
 *      - API Requests
 *    summary: update a book
 *    parameters:
 *      - in: path
 *        name: id
 *        type: string
 *        description: book ID
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object  
 *            properties:
 *              title:
 *                type: string
 *              ISBN:
 *                type: integer
 *              price:
 *                type: integer
 *    responses:
 *      '200':
 *        description: OK
 */

 app.patch('/books/:id', async (req,res) => {
  try{
      const updatedBook = await Book.updateMany(
          {_id: req.params.id},
          {$set: { title: req.body.title, ISBN: req.body.ISBN, price: req.body.price}})
      res.json(updatedBook);
  }catch(err){
      res.json({message: err});
  }
})

/**
 * @swagger
 * /books/{id}:
 *  delete:
 *    tags:
 *      - API Requests
 *    summary: delete a book
 *    parameters:
 *      - in: path
 *        name: id
 *        type: string
 *        description: book ID
 *    responses:
 *      '200':
 *        description: OK
 */

 app.delete('/books/:id', async (req,res)=> {
  try{
      const deletedBook = await Book.remove({ _id: req.params.id})
      res.json(deletedBook)
  }catch(err){
      res.json({message: err})
  }
})

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to db')
})

const port = 5050

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})