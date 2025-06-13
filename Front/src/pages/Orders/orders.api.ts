import axios from 'axios'
import config from '../../config'
import type { IOrder } from './orders.types'

const addOrder = (order: IOrder) => {
  return axios
    .post(`${config.BASE_URL}/api/orders/`, order)
    .then((resp) => {
      return resp.data
    })
    .catch((error) => {
      console.error('Ошибка:', error)
    })
}

const ordersApi = {
  addOrder,
}

export default ordersApi
