import * as types from './ActionTypes'

const initialState = { count: 0}

export default function updateCounter(state = initialState, action) {
  switch (action.type) {
  case types.INCREMENT:
    return { count: state.count + action.value }
  case types.DECREMENT:
    return { count: state.count - action.value }
  default:
    return { count: 0 }
  }
}
