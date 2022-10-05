import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {Styles} from './style';
import ArrowBottom from '../../assets/icons/arrowBottom';
import Calendar1Icon from '../../assets/icons/calendar1';
import {Input} from '../../components/Input';
import ProjectBtSheet from '../../components/BottomSheet/TaskBtSheets/Project/ProjectBtSheet';
import DateBtSheet from '../../components/BottomSheet/Date/DateBtSheet';
import DurationBtSheet from '../../components/BottomSheet/Duration/DurationBtSheet';
import * as navigation from '../../navigation/RootNavigation';
import ArrowLeft from '../../assets/icons/arrowLeft';
import {Sizes} from '../../assets/RootStyle';
import {DELETE_TASK, UPDATE_TASK} from '../../store/actions/types/taskTypes';
import dispatch from '../../hook/dispatch/dispatch';

function UpdateTask(props) {
  const anun = 'Project';
  const amsativ = 'Date';
  const dur = 'Duration';
  const item = props.route.params.item;
  const [data, setData] = useState({});
  const [project, setProject] = useState(false);
  const [date, setDate] = useState(false);
  const [duration, setDuration] = useState(false);

  const styles = Styles();
  useEffect(() => {
    if (date || project || duration) {
      props.navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    }
    if (!project && !date && !duration) {
      props.navigation.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    }
    setData({...data, ['id']: item.id});
  }, [project, date, duration]);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Home')}>
        <ArrowLeft
          iconWidth={Sizes.size13}
          iconHeight={Sizes.size20}
          iconColor={'#347474'}
        />
      </TouchableOpacity>

      <Text style={styles.text}>Update Task</Text>
      <Pressable style={styles.inpView}>
        <Input style={styles.input} {...props} placeholder={'Title*'}>
          <Text>{item.title}</Text>
        </Input>
      </Pressable>

      <TouchableOpacity
        style={styles.inpView2}
        onPress={() => {
          setProject(!project);
        }}>
        <Text style={styles.input}>{data.Project || item.project}</Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.inpView2}
        onPress={() => {
          setDate(!date);
        }}>
        <Text style={styles.input}>{data.Date || item.date}</Text>
        <View style={styles.touch}>
          <Calendar1Icon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inpView2}
        onPress={() => {
          setDuration(!duration);
        }}>
        <Text style={styles.input}>{data.Duration || item.duration}</Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            dispatch(DELETE_TASK, item.id);
            navigation.navigate('Home');
          }}>
          <Text style={styles.butText2}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(UPDATE_TASK, data);
            navigation.navigate('Home');
          }}>
          <Text style={styles.butText}>Update</Text>
        </TouchableOpacity>
      </View>

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

export default UpdateTask;
