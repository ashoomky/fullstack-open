import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  // stores the input value
  const [value, setValue] = useState('')
  // stores the countries to render
  const [countryData, setCountryData] = useState([])
  const [filter, setFilter] = useState([])

  // fetching all countries
  useEffect( () => {
    console.log("effect is running")
      console.log("fetching countries")
      axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(
        response => {
          setCountryData(response.data)
          console.log(response.data)
        }
      )
      .catch(error => {
        console.log('error fetching countries', error)
      })
  }, [])

  useEffect(() => {
    console.log("filtering occuring")
    if (value) {
      console.log("running")
      const matches = countryData.filter(country => 
        country.name.common.toLowerCase().includes(value.toLowerCase())
      )
      setFilter(matches)
      
    } else{
      setFilter([])
    }
  }, [value])
  console.log(filter)
  // handle input in the input box from user
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  
  return (
    <div>find countries
      <input value={value} onChange={handleChange}/>
      <div>
        {filter.length > 10 && <div>too many matches be more specific</div>}
        {filter.length > 0 && filter.length<10 && 
        filter.map((country, i) => (
          <div key = {i}>{country.name.common}</div>
        ))}
      </div>
    </div>
  )
}
export default App