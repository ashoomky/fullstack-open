import {useState} from 'react'
import personService from './services/persons'

const PersonForm = ({persons, setPersons, setMessage}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

  
    const addPerson = (event) => {
        event.preventDefault()
        const existingPerson = persons.find(person => person.name === newName)
        if (existingPerson){
            if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with new one?`)){
                const updatedPerson = {...existingPerson, number: newNumber}
                personService
                .update(existingPerson.id, updatedPerson)
                .then(returnedPerson => {
                    setPersons(persons.map(person => 
                       person.id !== existingPerson.id ? person : returnedPerson
                    ))
                    setMessage(
                        `${existingPerson.name}'s phone number has been updated.`
                    )
                    setTimeout(()=>{
                        setMessage(null)
                    }, 3000)
                    setNewName('')
                    setNewNumber('')
                })
                .catch(error => {
                    alert(`${existingPerson.name} has already been removed from server`)
                    setPersons(persons.filter(p => p.id !== existingPerson.id))
                })
            }
            return
        }
        
        const nameObject = {
        name: newName,
        number: newNumber,
        }
        
        personService
        .create(nameObject)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson)) //create returns singular new object
            setMessage(
                `${returnedPerson.name} has been added.`
            )
            setTimeout(()=>{
                setMessage(null)
            }, 3000)
            setNewName('')
            setNewNumber('')
        })
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