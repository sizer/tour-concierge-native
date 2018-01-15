import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CircleButton = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#B3057E',
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
    },
    title: {
      color: '#fff',
      fontSize: 24,
    },
  });

  return (
    <View style={styles.container} >
      <Text style={styles.title}>
        +
      </Text>
    </View>
  );
};

export default CircleButton;
