import { WS_URL } from '../constants/config'
import { dataModeler } from '../utils/common'

const msg = JSON.stringify({
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tBTCUSD'
})

export function createWS(cb = () => []) {
  const wss = new WebSocket(WS_URL)

  wss.onmessage = (msg) => {
    const response = JSON.parse(msg.data)
    if (Array.isArray(response)) {

      const CHANNEL_ID = response[0]
      const data = response[1]

      if (Array.isArray(data)) {
        cb(dataModeler(data))
      }
    } else {
      if (response && response.event && response.event === 'subscribed') {
        console.log('WS --------------------- SUBSCRIBED')
      }
    }
  }

  wss.onopen = () => {
    wss.send(msg)
    console.log('WS --------------------- CONNECTED')
  }

  wss.onclose = () => {
    console.log('WS --------------------- DISCONNECTED')
  }

  return wss
}