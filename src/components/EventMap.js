import { MapView } from 'expo';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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

  const renderMap = () => {
    return (
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
          strokeColor="rgba(70, 2, 49, 0.1)"
          fillColor="rgba(70, 2, 49, 0.1)"
        />
      </MapView>
    );
  };

  const renderNothing = () => {
    return (
      <View>
        <Text>can not get location data from devise. please allow it.</Text>
      </View>
    );
  };

  return (
    <View style={styles.container} >
      { props.location.allowed ? renderMap() : renderNothing() }
    </View>
  );
};

export default EventMap;
