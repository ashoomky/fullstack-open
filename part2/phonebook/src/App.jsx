import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  // controlling the form input element
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  // new array including filtered persons
  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )
  const addPerson = (event) => {
    event.preventDefault()

    // checking if the name is already in phonebook
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    setPersons(persons.concat(nameObject)) // adding the new name to the persons array
    setNewName('') // resetting the text box to be nothing again
    setNewNumber('') // resetting the number box
  }
  // ensuring the value entered in the input text box is set to be the name using the setname function
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>filter shown with <input value={filter} onChange = {handleFilterChange}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName}
          onChange={handlePersonChange}/>
        </div>
        <div>number: <input value = {newNumber} 
        onChange = {handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {personsToShow.map((person, i) =>
          <div key = {i}>{person.name} {person.number}</div>
        )}
    </div>
  )
}

export default App