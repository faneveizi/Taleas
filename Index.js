const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config')
app.use(express.urlencoded())
app.use(express.json())


const booksRoute = require('./routes/books')
const authorsRoute = require('./routes/authors')
app.use('/books', booksRoute)
app.use('/authors', authorsRoute)

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to db')
})

const port = 5050

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})