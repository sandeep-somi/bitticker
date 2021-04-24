export const SET_DATA = 'SET_DATA'

export function setData(payload) {
  return dispatch => {
    dispatch({
      type: SET_DATA,
      payload: payload
    })
  }
}