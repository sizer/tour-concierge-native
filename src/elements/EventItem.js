import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EventItem = () => {
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
    <View style={styles.container} >
      <View style={styles.info} >
        <Text style={styles.artist}>04 Limited Sazabys</Text>
        <Text style={styles.date}>2018/01/13 (土) 18:00</Text>
        <Text style={styles.venue}>@Zepp Osaka Bayside(大阪府)</Text>
      </View>
    </View>
  );
};

export default EventItem;
