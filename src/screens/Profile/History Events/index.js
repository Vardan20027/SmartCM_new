import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';
import {EventsData} from '../../../assets/FakeData';
import {EventStyles} from '../../../components/Home/Events/style';
import {Styles} from './style';
import VictoryEvents from '../Victory/VictoryEvents';
import UnreadIcon from '../../../assets/icons/unreadIcon';
import Calendar1Icon from '../../../assets/icons/calendar1';
import * as RootNavigation from '../../../navigation/RootNavigation';
import moment from 'moment';

function HistoryEvents(props) {
  const eventStyles = EventStyles();
  const styles = Styles();
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => RootNavigation.navigate('Event Info', {item})}>
      <View style={eventStyles.container}>
        <View style={[eventStyles.line, {backgroundColor: item.color}]} />
        <View style={eventStyles.content}>
          <Text style={eventStyles.header}>{item.title}</Text>
          <Text style={eventStyles.description}> {item.short_description}</Text>
          <View style={eventStyles.date_container}>
            <Text style={eventStyles.date}>
              {moment(item.date).format('MMM DD, YYYY')} | {item.duration}
            </Text>
            <Text style={eventStyles.date}> {item.room}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History Events</Text>
      <View style={styles.content}>
        <VictoryEvents />
        <View style={styles.event_types_container}>
          <View style={styles.event_types_content}>
            <UnreadIcon
              iconColor={'#19B3A6'}
              iconWidth={Sizes.size10}
              iconHeight={Sizes.size10}
            />
            <Text style={styles.event_type}>Events</Text>
          </View>
          <View style={styles.event_types_content}>
            <UnreadIcon
              iconColor={'#92BEFA'}
              iconWidth={Sizes.size10}
              iconHeight={Sizes.size10}
            />
            <Text style={styles.event_type}>Trainings</Text>
          </View>
          <View style={styles.event_types_content}>
            <UnreadIcon
              iconColor={'#F4C584'}
              iconWidth={Sizes.size10}
              iconHeight={Sizes.size10}
            />
            <Text style={styles.event_type}>Meeting</Text>
          </View>
          <View style={styles.event_types_content}>
            <UnreadIcon
              iconColor={'#EF988F'}
              iconWidth={Sizes.size10}
              iconHeight={Sizes.size10}
            />
            <Text style={styles.event_type}>Teambuilding</Text>
          </View>
        </View>
        <View style={styles.search_bar}>
          <TextInput
            placeholder={'Search history'}
            style={styles.search_input}
          />
          <TouchableOpacity style={styles.calendar_icon}>
            <Calendar1Icon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.events_list}>
        <FlatList
          data={EventsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default HistoryEvents;
