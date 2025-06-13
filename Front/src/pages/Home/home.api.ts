import axios from 'axios'
import config from '../../config'
import type { IMaster, ISupportPaginatedResponse } from './home.types'
import type { IGallery } from './components/Gallery/gallery.types'

const getMasters = (): Promise<ISupportPaginatedResponse<IMaster>> => {
  return axios
    .get(`${config.BASE_URL}/api/masters/`)
    .then((resp) => {
      console.log(resp.data)
      return resp.data
    })
    .catch((error) => {
      console.error('Ошибка:', error)
    })
}

const getGallery = (): Promise<ISupportPaginatedResponse<IGallery>> => {
  return axios
    .get(`${config.BASE_URL}/api/gallery/`)
    .then((resp) => {
      return resp.data
    })
    .catch((error) => {
      console.error('Ошибка:', error)
    })
}

const homeApi = {
  getMasters,
  getGallery,
}

export default homeApi
