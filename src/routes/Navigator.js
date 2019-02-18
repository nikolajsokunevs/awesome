import {createStackNavigator, createAppContainer} from 'react-navigation'
import MainConteiner from './main/containers/MainConteiner'

const Navigator = createStackNavigator({
  Home: {
    screen: MainConteiner
  }
})

export default createAppContainer(Navigator)
