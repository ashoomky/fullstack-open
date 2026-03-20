import personService from './services/persons'
const Persons = ({ persons, setPersons, filter, setNotification }) => {
    // new array including filtered persons
    const personsToShow = persons.filter(person =>
        person.name && person.name.toLowerCase().includes(filter.toLowerCase())
    )

    const handleDelete = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            personService.remove(id)
                .then(() => {
                    //accessing the previous person array using setPersons to remove the newly deleted one.
                    setNotification(
                        { text: `${name} has been removed from the server`, type: 'success' }
                    )
                    setTimeout(() => {
                        setNotification(null)
                    }, 3000)
                    setPersons(previousPersons => previousPersons.filter(p => p.id !== id))
                })
                .catch(err => {
                    console.error(err)

                    setNotification({
                        text: `Failed to delete ${name}`,
                        type: 'error'
                    })

                    setTimeout(() => {
                        setNotification(null)
                    }, 3000)
                })

        }
    }


    return (
        <div>
            {personsToShow.map((person, i) =>
                <div key={i}>{person.name} {person.number}
                    <button onClick={() => { handleDelete(person.id, person.name) }}>delete</button>
                </div>
            )}
        </div>
    )
}

export default Persons;