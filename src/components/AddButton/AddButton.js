import React, {useEffect, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import PlusIcon from '../../assets/icons/plusIcon';
import {Styles} from './AddStyle';
import _ from 'lodash';
import TasksIcon from '../../assets/icons/tasksIcon';
import EventsIcon from '../../assets/icons/eventsIcon';
import PlaneIcon from '../../assets/icons/planeIcon';

import {Sizes} from '../../assets/RootStyle';
import * as RootNavigation from '../../navigation/RootNavigation';

function AddButton({
  f,
  tasksY,
  doneTasksY,
  doneTasksX,
  tasksX,
  handlePress,
  planeX,
  planeY,
  rotation,
  sizeStyle,
  setOneRender,
}) {
  const styles = Styles();
  const [event, setEvent] = useState();
  const [task, setTask] = useState();
  const [leave, setLeave] = useState();
  useEffect(() => {
    setOneRender(true);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={{position: 'absolute', left: tasksX, top: tasksY}}>
        <TouchableOpacity
          onPress={() => {
            setTask(!task);
            RootNavigation.navigate('CreateTask', {task, setTask});
            handlePress();
          }}
          style={styles.secondaryButton}>
          <TasksIcon />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{position: 'absolute', left: doneTasksX, top: doneTasksY}}>
        <TouchableOpacity
          onPress={() => {
            setEvent(!event);
            RootNavigation.navigate('CreateEvent', {event, setEvent});
            handlePress();
          }}
          style={styles.secondaryButton}>
          <EventsIcon />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={{position: 'absolute', left: planeX, top: planeY}}>
        <TouchableOpacity
          onPress={() => {
            setLeave(!leave);
            RootNavigation.navigate('BookLeave', {leave, setLeave});
            handlePress();
          }}
          style={styles.secondaryButton}>
          <PlaneIcon />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.button, sizeStyle]}>
        <Pressable
          onPress={() => {
            setEvent(_.uniqueId());
            setTask(_.uniqueId());
            setLeave(_.uniqueId());
            handlePress();
          }}
          style={styles.polygon_press}>
          <ImageBackground
            source={
              f
                ? require('../../assets/images/Polygon2.png')
                : require('../../assets/images/Polygon1.png')
            }
            style={styles.polygon}
          />

          <Animated.View
            style={{
              transform: [{rotate: rotation}],
              position: 'absolute',
              bottom: Sizes.size40,
            }}>
            <PlusIcon iconColor={f ? '#F5F5F5' : '#347474'} />
          </Animated.View>
        </Pressable>
      </Animated.View>
    </View>
  );
}

export default AddButton;
