import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  useEffect(() => {
    console.log("effect")
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      console.log("promise fulfilled")
      setPersons(response.data)
    })
  }, [])
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  console.log(filter)

 
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter = {filter} setFilter = {setFilter}/>
      <h2>add a new</h2>
        <PersonForm persons ={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
        <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App