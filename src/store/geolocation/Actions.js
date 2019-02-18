import * as types from './ActionTypes'

export function updateCurrentLocation(location) {
  return {
    type: types.UPDATE_LOCATION,
    location
  }
}

export function updateLocation(location) {
  return {
    type: types.UPDATE_LOCATION,
    location
  }
}

export function getDefault() {
  return {
    type: types.DEFAULT
  }
}
