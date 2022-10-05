import React, {useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CalendarComp from '../Calendar';
import * as RootNavigation from '../../../navigation/RootNavigation';
import moment from 'moment';
import {EventStyles} from '../Events/style';
import {TaskStyles} from '../Tasks/style';
import {Styles} from './style';
import CheckboxComponent from '../../Checkbox';

function All(props) {
  const ref = useRef(null);
  const scrollToTop = () => ref.current.scrollToIndex({index: 0});
  const taskStyles = TaskStyles();
  const eventStyles = EventStyles();
  const styles = Styles();
  const Tasks = props.TasksList;
  const Events = props.EventsList;
  const all = [...Events, ...Tasks];
  const sortedAll = all.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const renderItem = ({item}) =>
    item.project ? (
      <View style={taskStyles.container}>
        <CheckboxComponent />
        <View style={taskStyles.content}>
          <TouchableOpacity
            style={taskStyles.pressable_content}
            onPress={() => RootNavigation.navigate('UpdateTask', {item})}>
            <View>
              <Text style={taskStyles.header}>{item.title}</Text>
              <Text style={taskStyles.data}>
                {moment(item.date).format('MMM DD, YYYY')} | {item.duration}
              </Text>
            </View>
            <View style={taskStyles.project_container}>
              <View
                style={[
                  taskStyles.project_content,
                  {
                    backgroundColor: `${item.color}`,
                  },
                ]}>
                <Text style={taskStyles.project}> {item.project}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <TouchableOpacity
        style={eventStyles.container}
        onPress={() => RootNavigation.navigate('Event Info', {item})}>
        <View style={[eventStyles.line, {backgroundColor: item.color}]} />
        <View style={eventStyles.content}>
          <Text style={eventStyles.header}>{item.title}</Text>
          <Text style={eventStyles.description}> {item.short_description}</Text>
          <View style={eventStyles.date_container}>
            <Text style={eventStyles.date}>
              {moment(item.date).format('MMM DD, YYYY')} | {item.duration}
            </Text>
            <Text style={eventStyles.date}> {item.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <FlatList
          ListHeaderComponent={
            props.focused ? (
              <CalendarComp
                scrollToTop={scrollToTop}
                {...props}
                Events={Events}
                Tasks={Tasks}
              />
            ) : null
          }
          data={sortedAll}
          renderItem={renderItem}
          keyExtractor={item => item.index}
          ref={ref}
        />
      </SafeAreaView>
    </View>
  );
}

export default All;
