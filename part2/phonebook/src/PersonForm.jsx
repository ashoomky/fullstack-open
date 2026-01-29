import {useState} from 'react'
import axios from 'axios'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

  
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
        axios
        .post('http://localhost:3001/persons', nameObject)
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

    return (
        <div>
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
        </div>
    )

}
export default PersonForm;