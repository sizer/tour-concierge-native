import { MapView } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const EventMap = (props) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 300,
    },
    mapView: {
      width: '100%',
      height: 300,
    },
  });

  const latlng = {
    latitude: props.location.data ? props.location.data.coords.latitude : 35.681167,
    longitude: props.location.data ? props.location.data.coords.longitude : 139.767052,
  };

  return (
    <View style={styles.container} >
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: latlng.latitude,
          longitude: latlng.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Circle
          center={latlng}
          radius={props.distance * 1000}
          strokeColor="rgba(70, 2, 49, 0.5)"
          fillColor="rgba(70, 2, 49, 0.5)"
        />
      </MapView>
    </View>
  );
};

export default EventMap;
