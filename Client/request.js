var axios = require('axios')

//dev url
// export const API_URL = 'http://localhost:4001/api/v1/'

//production url
export const API_URL = 'http://13.127.232.204:4001/api/v1/'

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

//async function which block a certain user
export async function BlockUser(userId) {
  var config = {
    method: 'post',
    url: API_URL + 'block_user?userId=' + userId
  }

  return axios(config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)

      return { error: 'Some error occured!:' + error }
    })
}

//async function which get all the streams
export async function getAllStreams() {
  var config = {
    method: 'get',
    url: API_URL + 'all_streams_admin'
  }

  return axios(config)
    .then(response => {
      return response.data.streams
    })
    .catch(error => {
      console.log(error)

      return { error: 'Some error occured!:' + error }
    })
}

//async function will end a stream
export async function EndStream(streamId) {
  var config = {
    method: 'post',
    url: API_URL + 'end_stream?streamId=' + streamId
  }

  return axios(config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)

      return { error: 'Some error occured!:' + error }
    })
}
