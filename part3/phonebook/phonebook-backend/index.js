require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// importing the module (contains schema and model for phonebook entries)
const Phonebook = require('./models/phonebook')

const app = express()
app.use(express.json()) // parse JSON bodies
app.use(cors()) // enable CORS for all routes from backend
app.use(express.static('dist'))

// environment variable for password (safer than hardcoding)
const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error(err))


// routes

//fetching all entries 
app.get('/api/phonebook', (req, res) => {
  Phonebook.find({}).then(entries => res.json(entries))
})
// adding entry to phonebook
app.post('/api/phonebook', (req, res) => {
  const { content, important } = req.body
  const entry = new Phonebook({ 
    content, 
    important: important || false })
  
  entry.save().then(saved => res.json(saved))
})

// start server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))