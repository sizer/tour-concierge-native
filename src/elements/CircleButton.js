import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const CircleButton = (props) => {
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
  });

  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor="transparent"
    >
      <View style={styles.container} >
        <Icon name={props.iconName ? props.iconName : ''} size={24} color="#fff" />
      </View>
    </TouchableHighlight>
  );
};

export default CircleButton;
