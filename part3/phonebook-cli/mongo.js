const mongoose = require('mongoose')

const password = process.argv[2]

const url = `mongodb+srv://ashlee_db_user:${password}@phonebook.svnansv.mongodb.net/?appName=phonebook`

mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})
