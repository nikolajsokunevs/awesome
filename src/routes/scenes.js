import React from 'react'
import {Actions, Scene, Drawer} from 'react-native-router-flux'
import MainContainer from './main/containers/MainConteiner'
import MenuComponent from './main/components/MenuComponent'

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="main" component={MainContainer} title="Home" initial/>
    <Drawer
      key="drawer"
      drawer
      contentComponent={MenuComponent}
      drawerWidth={300}
      drawerPosition="right"
      hideNavBar
    >
      <Scene key="main2">
        <Scene key="menu" component={MenuComponent} title="deg"/>
      </Scene>
    </Drawer>
  </Scene>
)

export default scenes
