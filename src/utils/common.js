export function dataModeler(data = []) {
  return {
    BID: data[0],
    BID_SIZE: data[1],
    ASK: data[2],
    ASK_SIZE: data[3],
    DAILY_CHANGE: data[4],
    DAILY_CHANGE_RELATIVE: data[5],
    LAST_PRICE: data[6],
    VOLUME: data[7],
    HIGH: data[8],
    LOW: data[9],
  }
}

export function toLocaleString(num = 0) {
  if (typeof num !== "number") return "-";
  return num.toLocaleString()
}