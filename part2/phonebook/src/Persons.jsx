import personService from './services/persons'
const Persons = ({persons, setPersons, filter}) => {
    // new array including filtered persons
    const personsToShow = persons.filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase())
    )
    
    
    const handleDelete = (id, name) => {
        if (window.confirm(`Delete ${name}?`)){
            personService.remove(id)
        .then(() => {
            //accessing the previous person array using setPersons to remove the newly deleted one.
            setPersons(previousPersons => previousPersons.filter(p => p.id !== id))
        })
        .catch(error => {
            alert(`${name} was already removed from the server`)
            setPersons(previousPersons => previousPersons.filter(p => p.id !== id))
            // deletes the person from the ui since it is already deleted
        })

        } 
    }
    console.log(persons)


    return (
        <div>
            {personsToShow.map((person, i) =>
                <div key = {i}>{person.name} {person.number} 
                    <button onClick={() => {handleDelete(person.id, person.name)}}>delete</button>
                </div>
            )}
        </div>
    )
}
export default Persons;