const express = require('express')
const app = express()

let phonebook = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
// event handler that handles requests to /persons, sends data to browser
app.get('/api/persons', (request, response) => {
    response.send(phonebook)
})

const now = new Date()
app.get('/info', (request, response) => {
    response.send(`<p> phonebook has info for ${phonebook.length} people </p>
        <p>${now}</p>
        `)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

