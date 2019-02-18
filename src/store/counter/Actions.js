import * as types from './ActionTypes'

export function increment(value) {
  return {
    type: types.INCREMENT,
    value
  }
}

export function decrement(value) {
  return {
    type: types.DECREMENT,
    value
  }
}

export function reset() {
  return {
    type: types.RESET
  }
}
