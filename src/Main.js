import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import {Router} from 'react-native-router-flux'
import reducer from './store'
import MainConteiner from './routes/main/containers/MainConteiner'
import Navigator from './routes/Navigator'

const store = createStore(reducer)

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
