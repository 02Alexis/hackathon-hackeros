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

export { createData }