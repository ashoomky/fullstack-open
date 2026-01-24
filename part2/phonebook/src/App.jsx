import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  // controlling the form input element
  const [newName, setNewName] = useState('')
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
    setPersons(persons.concat(nameObject)) // adding the new name to the persons array
    setNewName('') // resetting the text box to be nothing again
  }
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  console.log(persons)


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value = {newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, i) =>
          <div key = {i}>{person.name}</div>
        )}

      
    </div>
  )
}

export default App