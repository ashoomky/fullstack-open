const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require("cors")

app.use(cors()) // to allow cross-origin requests
app.use(express.json()) // to access request body data



morgan.token('body', (request) => {
    return request.method === 'POST' ? JSON.stringify(request.body) : '';
})

app.use(morgan(
    ':method :url :status :res[content-length] - :response-time ms :body'
));

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

app.get(`/api/persons/:id`, (request, response) => {
    const id = request.params.id //accessing id from request body
    const entry = phonebook.find(entry => entry.id === id)
    if (entry){
        response.json(entry)
    }else{
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    phonebook = phonebook.filter(entry => entry.id !== id)
    response.status(204).end()
})


app.post('/api/persons', (request, response) => {
    const entry = request.body
    if (!entry.name || !entry.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    if (phonebook.some(p => p.name === entry.name)){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    entry.id = String(Math.floor(Math.random() * 100000000))
    phonebook = phonebook.concat(entry)
    response.json(entry)
})

const PORT = process.env.PORT || 3001
app.listen(PORT)


