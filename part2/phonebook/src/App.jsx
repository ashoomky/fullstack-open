import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  // controlling the form input element
  const [newName, setNewName] = useState('')
  const[newNumber, setNewNumber] = useState('')
  const addPerson = (event) => {
    event.preventDefault()

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
    setNewNumber('')
  }
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  console.log(persons)

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person, i) =>
          <div key = {i}>{person.name} {person.number}</div>
        )}
    </div>
  )
}

export default App