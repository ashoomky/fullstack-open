const Persons = ({persons, filter}) => {
    // new array including filtered persons
    const personsToShow = persons.filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase())
    )
    return (
        <div>
            {personsToShow.map((person, i) =>
                <div key = {i}>{person.name} {person.number}</div>
            )}
        </div>
    )
}
export default Persons;