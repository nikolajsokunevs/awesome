import React from 'react'
import {Footer, FooterTab, Button, Icon} from 'native-base'

export const FooterComponent = () => {
  return (
    <Footer style={{backgroundColor: '#ffffff'}}>
      <FooterTab style={{backgroundColor: '#ffffff'}} iosBarStyle="light-content">
        <Button>
          <Icon type="FontAwesome" name='bars' />
        </Button>
      </FooterTab>
    </Footer>
  )
}

export default FooterComponent
