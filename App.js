/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Icon } from 'native-base';

import MapCallout, { styles as mapCalloutStyles } from './components/MapCallout';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      markers: [{ title: 'hola', latlng: {latitude: 1.3521, longitude: 103.8198} },{ title: 'ehh', latlng: {latitude: 1.3521, longitude: 103.8298} }]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 1.3521,
            longitude: 103.8198,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
        >
        {this.state.markers.map(marker => (
          <Marker
            key={marker.title}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          >
            <View>
              <Icon type='MaterialCommunityIcons' name='car-estate' fontSize={50} style={{ color: 'black' }} /> 
            </View>
            <Callout style={mapCalloutStyles.calloutContainer} tooltip>
              <MapCallout 
                title={marker.title}
                description='hihi'

              />
            </Callout>
          </Marker>
        ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
