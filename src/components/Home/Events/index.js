import React, {useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {EventStyles} from './style';
import {Sizes} from '../../../assets/RootStyle';
import CalendarComp from '../Calendar';
import * as RootNavigation from '../../../navigation/RootNavigation';
import moment from 'moment';
import {useSelector} from 'react-redux';

function Events(props) {
  const ref = useRef(null);
  const scrollToTop = () => ref.current.scrollToIndex({index: 0});
  const styles = EventStyles();
  const Events = props.EventsList;
  const sortedEvents = Events.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => RootNavigation.navigate('Event Info', {item})}>
      <View style={styles.container}>
        <View style={[styles.line, {backgroundColor: item.color}]} />
        <View style={styles.content}>
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.description}> {item.short_description}</Text>
          <View style={styles.date_container}>
            <Text style={styles.date}>
              {moment(item.date).format('MMM DD, YYYY')} | {item.duration}
            </Text>
            <Text style={styles.date}> {item.room}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.flat_container}>
      <SafeAreaView style={styles.flat_content}>
        <FlatList
          ListHeaderComponent={
            props.focused ? (
              <CalendarComp
                scrollToTop={scrollToTop}
                {...props}
                Events={Events}
              />
            ) : null
          }
          data={sortedEvents}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ref={ref}
        />
      </SafeAreaView>
    </View>
  );
}

export default Events;
