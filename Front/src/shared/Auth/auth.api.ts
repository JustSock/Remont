import axios from 'axios'
import config from '../../config'

const auth = (body: { username: string; password: string }): Promise<{ token: string }> => {
  return axios
    .post(`${config.BASE_URL}/api/token/`, body)
    .then((resp) => {
      return resp.data
    })
    .catch((error) => {
      console.error('Ошибка:', error)
    })
}

const authApi = { auth }

export default authApi
