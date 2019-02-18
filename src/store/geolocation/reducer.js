import * as types from './ActionTypes'

const initialState = {
  position: {
    latitude: 56.972319,
    longitude: 23.797042,
    latitudeDelta: 0,
    longitudeDelta: 0
  }
}

export default function geoLocationUpdate(state = initialState, action) {
  switch (action.type) {
  case types.UPDATE_LOCATION:
    return {
      ...state,
      position: {
        latitude: action.location.latitude,
        longitude: action.location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }

    }
  case types.DEFAULT:
    return initialState
  default:
    return state
  }
}
