import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import VictoryTasks from '../Victory/VictoryTasks';
import * as RootNavigation from '../../../navigation/RootNavigation';
import {Styles} from './style';
import {TaskStyles} from '../../../components/Home/Tasks/style';
import CheckboxComponent from '../../../components/Checkbox';
import moment from 'moment';
import {useSelector} from 'react-redux';

function HistoryTasks(props) {
  const DATA = useSelector(state => state.tasks.list);
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
