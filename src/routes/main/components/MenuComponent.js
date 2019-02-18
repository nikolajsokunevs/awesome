import React from 'react'
import {View, Text} from 'react-native'
import {Content, List, ListItem} from 'native-base'

export default class MenuComponent extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#1e503a', justifyContent: 'center'}} />

        <View style={{flex: 2}}>
          <Content>
            <List>
              <ListItem>
                <Text>Menu1</Text>
              </ListItem>
              <ListItem>
                <Text>Menu2</Text>
              </ListItem>
            </List>
          </Content>
        </View>
      </View>
    )
  }
}

