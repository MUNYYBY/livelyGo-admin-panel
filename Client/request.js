var axios = require('axios')

//dev url
export const API_URL = 'http://localhost:4001/api/v1/'

//production url
// export const API_URL = 'https://localhost:4001/api/v1/'

//async function which get all the users
export async function getAllUsers() {
  var config = {
    method: 'get',
    url: API_URL + 'all_users'
  }

  return axios(config)
    .then(response => {
      return response.data.users
    })
    .catch(error => {
      console.log(error)

      return { error: 'Some error occured!:' + error }
    })
}
