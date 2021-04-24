import { SET_DATA } from './actions'

const initState = {
  data: {}
}

export default function (state = { ...initState }, action) {

  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}