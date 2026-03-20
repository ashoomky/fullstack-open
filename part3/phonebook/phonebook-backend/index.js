require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// importing the module (contains schema and model for phonebook entries)
const Phonebook = require('./models/phonebook')

const app = express()
app.use(express.json()) // parse JSON bodies
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
  const { name, number, important } = req.body
  const entry = new Phonebook({ 
    name,
    number,
    important: important || false })
  
  entry.save().then(saved => res.json(saved))
})

//deleting entry from phonebook
app.delete('/api/phonebook/:id', async (req, res) => {
  try {
    const id = req.params.id
    console.log("🧨 Deleting ID:", id)

    const result = await Phonebook.findByIdAndDelete(id)

    console.log("✅ Result:", result)

    if (!result) {
      return res.status(404).json({ error: 'not found' })
    }

    res.status(204).end()
  } catch (err) {
    console.error("🔥 ACTUAL ERROR:", err) // THIS is what we need
    res.status(500).json({ error: err.message })
  }
})

// start server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))