import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  // stores the input value
  const [value, setValue] = useState('')
  // stores the countries to render
  const [countryData, setCountryData] = useState([])
  const [filter, setFilter] = useState([])
  const [countryToShow, setCountryToShow] = useState(null)

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
        {filter.length > 0 && filter.length<10 && filter.length !== 1 &&
        filter.map((country, i) => (
          <div key = {i}>{country.name.common}<button type="button" onClick={() =>setCountryToShow(country)}>show</button>
            {/* checking to see which country we want to display this time */}
            {country.name.common === countryToShow?.name.common && (
              <div>
                <h2 key ={i}> {country.name.common}</h2>
                Capital {country.capital} <br></br>
                Area {country.area}
                <h3>Languages</h3>
                {/* converts it to from object to array type */}
                <ul>
                  {Object.values(country.languages).map((language, i) => (
                    <li key={i}>{language}</li>
                  ))}
                </ul>
                <img src={country.flags.png} alt="flag" />
              </div>
            )}
          </div>
        ))}
        {filter.length === 1 && filter.map((country, i) => (
          <div>
            <h2 key ={i}> {country.name.common}</h2>
            Capital {country.capital} <br></br>
            Area {country.area}
            <h3>Languages</h3>
            {/* converts it to from object to array type */}
            <ul>
              {Object.values(country.languages).map((language, i) => (
                <li key={i}>{language}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt="flag" />
          </div>
        ))
      }
      </div>
    </div>
  )
}
export default App