import React from 'react';
import { FlatList } from 'react-native';

import EventItem from '../elements/EventItem';

const EventList = (props) => {
  return (
    <FlatList
      data={props.events}
      numColumns={2}
      columnWrapperStyle={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
      renderItem={({ item }) => <EventItem key={item.key} event={item} />}
    />
  );
};

export default EventList;
