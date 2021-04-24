import { getDataAPI } from './apis'
import { dataModeler } from '../../utils/common'

export function getData() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      getDataAPI()
        .then(res => {
          dataModeler(res)
          resolve(res)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  }
}