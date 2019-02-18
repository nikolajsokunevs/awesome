import React from 'react'
import {Image} from 'react-native'
import {Header, Left, Body, Right, Button, Icon} from 'native-base'
import styles from './HeaderComponentStyles'

const logo = require('../assets/logo.png')

export const HeaderComponent = () => {
  return (
    <Header style={{backgroundColor: '#ffffff'}} iosBarStyle="light-content">
      <Left>
        <Button transparent>
          <Icon type="FontAwesome" name='bars' style={styles.icon} />
        </Button>
      </Left>
      <Body>
        <Image resizeMode="contain" style={styles.logo} source={logo} />
      </Body>
      <Right>
        <Button transparent>
          <Icon type="FontAwesome" name='gift' style={styles.icon} />
        </Button>
      </Right>
    </Header>
  )
}

export default HeaderComponent
