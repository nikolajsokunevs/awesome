import React from 'react'
import {View, Image} from 'react-native'
import {Container} from 'native-base'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import {connect} from 'react-redux'
import {updateLocation} from '../../../store/geolocation/Actions'
import styles from './MainContainerStyles'
import {HeaderComponent} from '../../../components/HeaderComponent'

const mapStateToProps = store => ({
  position: store.geoLocationReducer.position
})

const carMarker = require('../../../assets/truck3.png')

const mapDispatchToProps = dispatch => ({
  getCurrentLocation: () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const region = {
        latitude: parseFloat(position.coords.latitude),
        longitude: parseFloat(position.coords.longitude)
      }
      dispatch(updateLocation(region))
    }, (error) => alert(JSON.stringify(error)))
  }
})

class MainConteiner extends React.Component {
  componentDidMount() {
    this.props.getCurrentLocation()
  }

  render() {
    return (
      <Container>
        <HeaderComponent />
        <View style={styles.container}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={this.props.position}
          >
            <MapView.Marker coordinate={this.props.position} pinColor="#6a425c" />
            <MapView.Marker
              coordinate={{
                latitude: 56.897750,
                longitude: 24.149750
              }}
            >
              <Image
                source={carMarker}
                style={{width: 40, height: 40}}
              />
            </MapView.Marker>
          </MapView>
        </View>
      </Container>
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainConteiner)
