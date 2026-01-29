import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// returns all data
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// returns the newly created object
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { 
  getAll, 
  create, 
  remove 
}