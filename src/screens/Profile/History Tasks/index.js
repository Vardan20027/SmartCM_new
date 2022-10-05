import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import VictoryTasks from '../Victory/VictoryTasks';
import {Fonts, Sizes} from '../../../assets/RootStyle';
import * as RootNavigation from '../../../navigation/RootNavigation';
import {Styles} from './style';
import {TaskStyles} from '../../../components/Home/Tasks/style';
import CheckboxComponent from '../../../components/Checkbox';
import moment from 'moment';

function HistoryTasks(props) {
  const DATA = [
    {
      id: 11,
      title: 'Create Task',
      date: '2022-09-12',
      duration: '15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 12,
      title: 'Research Dashboard',
      date: '2022-03-10',
      duration: ' 15 minute',
      project: 'New City',
      color: '#FF8A9F',
    },
    {
      id: 13,
      title: 'Feedbacks',
      date: '2022-01-30',
      duration: ' 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 14,
      title: 'Sign up',
      date: '2022-05-14',
      duration: ' 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 15,
      title: 'Research Dashboard',
      date: '2022-06-07',
      duration: ' 15 minute',
      project: 'New City',
      color: '#FF8A9F',
    },
    {
      id: 16,
      title: 'Sign up',
      date: '2022-05-12',
      duration: ' 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 17,
      title: 'Create Task',
      date: '2022-09-22',
      duration: ' 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 18,
      title: 'Feedbacks',
      date: '2022-05-08',
      duration: ' 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
    {
      id: 19,
      title: 'Sign up',
      date: '2022-07-12',
      duration: ' 15 minute',
      project: 'Mapplo',
      color: '#39B9CE',
    },
    {
      id: 20,
      title: 'Create Task',
      date: '2022-10-12',
      duration: ' 15 minute',
      project: 'Bob AI',
      color: '#38A98E',
    },
  ];
  const styles = Styles();
  const taskStyles = TaskStyles();
  const renderItem = ({item}) => (
    <>
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
    </>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History Tasks</Text>
      <VictoryTasks />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default HistoryTasks;
