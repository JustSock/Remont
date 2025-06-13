import axios from 'axios'
import config from '../../config'
import type { ISupportPaginatedResponse } from '../Home/home.types'
import type { IReview } from './reviews.types'

const getReviews = (): Promise<ISupportPaginatedResponse<IReview>> => {
  return axios
    .get(`${config.BASE_URL}/api/reviews/`)
    .then((resp) => {
      return resp.data
    })
    .catch((error) => {
      console.error('Ошибка:', error)
    })
}

const addReview = (item: IReview): Promise<IReview> => {
  return axios
    .post(`${config.BASE_URL}/api/reviews/`, item)
    .then((resp) => {
      return resp.data
    })
    .catch((error) => {
      console.error('Ошибка:', error)
    })
}

const reviewsApi = {
  getReviews,
  addReview,
}

export default reviewsApi
