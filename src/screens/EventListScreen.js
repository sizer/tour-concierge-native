import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import CircleButton from '../elements/CircleButton';
import EventList from '../components/EventList';

const EventListScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    eventmap: {
      width: '100%',
      height: 300,
      backgroundColor: '#B3057E',
    },
    inputField: {
      width: '100%',
      height: 58,
      position: 'relative',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    input: {
      backgroundColor: '#eee',
      width: '20%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 8,
      marginTop: 10,
      marginLeft: 10,
    },
    buttonContainer: {
      width: '10%',
      marginTop: 5,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container} >
      <View style={styles.eventmap} >
        <Text>Map</Text>
      </View>

      <View style={styles.inputField} >
        <TextInput
          style={styles.input}
          value="Distance"
        />
        <View style={styles.buttonContainer} >
          <CircleButton />
        </View>
      </View>

      <EventList />
    </View>
  );
};

export default EventListScreen;
