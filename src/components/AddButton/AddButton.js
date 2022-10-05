import React, {useEffect, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import PlusIcon from '../../assets/icons/plusIcon';
import {styles} from './AddStyle';
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
  const {pressable, button, secondaryButton} = styles();
  const [event, setEvent] = useState();
  const [task, setTask] = useState();
  const [leave, setLeave] = useState();
  useEffect(() => {
    setOneRender(true);
  }, []);
  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View style={{position: 'absolute', left: tasksX, top: tasksY}}>
        <TouchableOpacity
          onPress={() => {
            setTask(!task);
            RootNavigation.navigate('CreateTask', {task, setTask});
            handlePress();
          }}
          style={secondaryButton}>
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
          style={secondaryButton}>
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
          style={secondaryButton}>
          <PlaneIcon />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[button, sizeStyle]}>
        <Pressable
          onPress={() => {
            setEvent(_.uniqueId());
            setTask(_.uniqueId());
            setLeave(_.uniqueId());
            handlePress();
          }}
          style={pressable}>
          <ImageBackground
            source={
              f
                ? require('../../assets/images/Polygon2.png')
                : require('../../assets/images/Polygon1.png')
            }
            style={{
              width: Sizes.size100,
              height: Sizes.size90,
            }}
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
