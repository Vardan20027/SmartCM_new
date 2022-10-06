import React, {useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TaskStyles} from './style';
import CalendarComp from '../Calendar';
import * as RootNavigation from '../../../navigation/RootNavigation';
import moment from 'moment';
import CheckboxComponent from '../../Checkbox';
import {useSelector} from 'react-redux';

function Tasks(props) {
  const ref = useRef(null);
  const scrollToTop = () => ref.current.scrollToIndex({index: 0});
  const styles = TaskStyles();
  const Tasks = props.TasksList;
  const sortedTasks = Tasks.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const renderItem = ({item}) => (
    <>
      <View style={styles.container}>
        <CheckboxComponent />
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.pressable_content}
            onPress={() => RootNavigation.navigate('UpdateTask', {item})}>
            <View>
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.data}>
                {moment(item.date).format('MMM DD, YYYY')} | {item.duration}
              </Text>
            </View>
            <View style={styles.project_container}>
              <View
                style={[
                  styles.project_content,
                  {
                    backgroundColor: `${item.color}`,
                  },
                ]}>
                <Text style={styles.project}> {item.project}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
                Tasks={Tasks}
              />
            ) : null
          }
          data={sortedTasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ref={ref}
        />
      </SafeAreaView>
    </View>
  );
}

export default Tasks;
