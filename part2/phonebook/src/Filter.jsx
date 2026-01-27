
const Filter = ({filter, setFilter}) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    console.log(filter)
    return (
        <div>
            filter shown with <input value={filter} onChange = {handleFilterChange}/>
        </div>
    )
}
export default Filter;