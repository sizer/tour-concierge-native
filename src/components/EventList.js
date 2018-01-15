import React from 'react';
import { StyleSheet, View } from 'react-native';

import EventItem from '../elements/EventItem';

const container = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container} >
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
    </View>
  );
};

export default container;
