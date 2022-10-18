const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const bookArray = [
  { id: 1, name: " Harry Potter and the Sorcerer's Stone " },
  { id: 2, name: ' Harry Potter and the Chamber of Secrets ' },
  { id: 3, name: ' Harry Potter and the Prisoner of Azkaban ' }
]
app.get('/books', function (req, res) {
  res.send({ data: bookArray })
})

app.get('/error', function (req, res) {
  res.status(400).send({ message: 'Uncaught Error' })
})

app.post('/books', function (req, res) {
  console.log('req body', req.body)
  res.send({ data: [...bookArray, req.body] })
})

app.listen(5000, () => console.log('server running'))
