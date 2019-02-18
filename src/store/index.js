import {combineReducers} from 'redux'
import counterReducer from './counter/reducer'
import geoLocationReducer from './geolocation/reducer'

export default combineReducers({
  counterReducer, geoLocationReducer
})
