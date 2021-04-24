import { getAPI } from '../../utils/axios'

export function getDataAPI() {
  return getAPI(`/ticker/tBTCUSD`)
}