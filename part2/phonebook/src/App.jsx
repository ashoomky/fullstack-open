import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './services/persons'
import Notification from './Notification'

const App = () => {
  useEffect(() => {
    personService
    .getAll()
    .then(data => setPersons(data))
  }, [])
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification}/>
        <Filter filter = {filter} setFilter = {setFilter}/>
      <h2>add a new</h2>
        <PersonForm persons ={persons} setPersons={setPersons} setNotification = {setNotification}/>
      <h2>Numbers</h2>
        <Persons persons={persons} setPersons={setPersons} filter={filter} setNotification ={setNotification}/>
    </div>
  )
}

export default App