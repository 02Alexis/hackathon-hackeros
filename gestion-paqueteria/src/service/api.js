import axios from 'axios'

const BASE_URL = 'hackathon-production-a0fc.up.railway.app'

const createData = async (endpoint, body) => {
  const header = {
    'Authorization': ''
  }
  try {
    await axios.post(`${BASE_URL}/${endpoint}`, body, header)
  } catch (error) {
    console.log(error)
  }
}

const getLocation = async (address) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB_tm0-JyaqLx_ZveuiO4RHVHJQTYU2jcE&address=${address}`)
    return response.data.results[0].geometry.location
  } catch (error) {
    console.log(error)
  }
}

export { createData, getLocation }