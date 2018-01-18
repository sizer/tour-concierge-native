import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import moment from 'moment';

import CircleButton from '../elements/CircleButton';
import EventList from '../components/EventList';


import ENV from '../../env.json';

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

class EventListScreen extends React.Component {
  state = {
    eventList: [],
  }

  componentWillMount() {
    fetch(`${ENV.API_HOST}/api/events/nearby?q%5Blat%5D=35.625952&q%5Blong%5D=139.782309`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson.events.map((event) => {
          return {
            artistName: event.player.name,
            date: moment.unix(event.start_at).format('YYYY/MM/DD HH:mm'),
            venueName: '',
          };
        });
      })
      .then((eventList) => {
        this.setState({ eventList });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
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

        <EventList events={this.state.eventList} />
      </View>
    );
  }
}

export default EventListScreen;
