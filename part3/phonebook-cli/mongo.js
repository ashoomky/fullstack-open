const mongoose = require('mongoose')

const password = process.argv[2]
const name = process.argv[3] 
const added_password = process.argv[4]

const url = `mongodb+srv://ashlee_db_user:${password}@phonebook.svnansv.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.connect(url, {family: 4})
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

// schema
const personSchema = new mongoose.Schema({
    name: String,
    password: String
})

// model
const Person = mongoose.model('Person', personSchema)

// checking if name provided as argument in cli. if so, add to db. if not, list all entries
if (name) {
    const person = new Person({name: name, password: added_password})
    person.save().then(result => {
        console.log(`added ${name} to phonebook`)
        mongoose.connection.close()
    })
} else {
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
            console.log(person.name, person.password)
        })
        mongoose.connection.close()
    })
}
