import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import EventListScreen from './src/screens/EventListScreen';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container} >
      <Appbar />
      <EventListScreen />
    </View>
  );
};

export default App;
