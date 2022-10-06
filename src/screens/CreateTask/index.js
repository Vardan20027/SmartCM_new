import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  Platform,
} from 'react-native';
import {Styles} from './style';
import ArrowBottom from '../../assets/icons/arrowBottom';
import Calendar1Icon from '../../assets/icons/calendar1';
import {Input} from '../../components/Input';
import ProjectBtSheet from '../../components/BottomSheet/TaskBtSheets/Project/ProjectBtSheet';
import DateBtSheet from '../../components/BottomSheet/Date/DateBtSheet';
import DurationBtSheet from '../../components/BottomSheet/Duration/DurationBtSheet';
import _ from 'lodash';
import dispatch from '../../hook/dispatch/dispatch';
import {CREATE_TASK} from '../../store/actions/types/taskTypes';
import * as navigation from '../../navigation/RootNavigation';

function CreateTask(props) {
  const anun = 'project';
  const amsativ = 'date';
  const dur = 'duration';
  const task = props.route.params.task;
  const setTask = props.route.params.setTask;
  const [project, setProject] = useState(false);
  const [date, setDate] = useState(false);
  const [duration, setDuration] = useState(false);
  const [great, setGreat] = useState(false);
  const [data, setData] = useState({});
  console.log(1111, data);
  const [value, setValue] = useState('');
  const styles = Styles();
  useEffect(() => {
    if (date || project || duration || great) {
      props.navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    }
    if (!project && !date && !duration && !great) {
      props.navigation.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    }
    setData({...data, ['id']: _.uniqueId});
  }, [project, date, duration, great]);
  useMemo(() => {
    setData({});
  }, [task]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={styles.title}>Create Task</Text>
      <Pressable style={styles.title_input_container}>
        <Input
          style={styles.input}
          {...props}
          placeholder="Title*"
          onChangeText={setValue}
          value={value}
        />
      </Pressable>

      <TouchableOpacity
        style={styles.input_container}
        onPress={() => {
          setProject(!project);
        }}>
        <Text style={styles.input}>{data.project || 'Project*'}</Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.input_container}
        onPress={() => {
          setDate(!date);
        }}>
        <Text style={styles.input}>{data.date || 'Date'}</Text>
        <View style={styles.touch}>
          <Calendar1Icon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.input_container}
        onPress={() => {
          setDuration(!duration);
        }}>
        <Text style={styles.input}>{data.duration || 'Duration'}</Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(CREATE_TASK, data);
          console.log(2222, data);
          navigation.navigate('Home');
        }}>
        <Text style={styles.button_text}>Create</Text>
      </TouchableOpacity>
      {project ? (
        <ProjectBtSheet
          project={project}
          setProject={setProject}
          data={data}
          setData={setData}
          anun={anun}
        />
      ) : null}
      {date ? (
        <DateBtSheet
          date={date}
          setDate={setDate}
          amsativ={amsativ}
          data={data}
          setData={setData}
        />
      ) : null}
      {duration ? (
        <DurationBtSheet
          duration={duration}
          setDuration={setDuration}
          dur={dur}
          data={data}
          setData={setData}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
}

export default CreateTask;
