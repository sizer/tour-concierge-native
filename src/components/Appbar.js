import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Appbar = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#04A2FE',
      width: '100%',
      height: 70,
      paddingTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tour Concierge</Text>
    </View>
  );
};

export default Appbar;
