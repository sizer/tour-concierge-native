import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Linking } from 'react-native';

const EventItem = (props) => {
  const styles = StyleSheet.create({
    container: {
      width: '48%',
      height: 72,
      borderWidth: 1,
      borderColor: '#ddd',
      margin: 1,
    },
    info: {
      padding: 5,
    },
    artist: {
      fontSize: 18,
      marginBottom: 5,
    },
    date: {
      fontSize: 12,
    },
    venue: {
      fontSize: 12,
    },
  });

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => { Linking.openURL(props.event.url); }}
    >
      <View style={styles.info} >
        <Text style={styles.artist}>{props.event.artistName}</Text>
        <Text style={styles.date}>{props.event.date}</Text>
        <Text style={styles.venue}>{props.event.venueName}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default EventItem;
