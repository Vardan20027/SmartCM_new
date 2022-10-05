import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Styles} from './style';
import Events from '../../components/Home/Events';
import Tasks from '../../components/Home/Tasks';
import All from '../../components/Home/All';
import Header from '../../components/Home/Calendar/header';
import {useSelector} from 'react-redux';

const HomeScreen = props => {
  const TasksList = useSelector(state => state.tasks.list);
  const EventsList = useSelector(state => state.events.list);
  const [focused, setFocused] = useState(false);
  const styles = Styles();
  const [f, setF] = useState(3);
  const name = useSelector(state => state.user.name);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Hello, {name}</Text>
        <Image
          style={styles.img}
          source={require('../../assets/images/home_image.png')}
        />
        <View style={styles.selectView}>
          <View style={styles.select_container}>
            <Pressable
              onPress={() => setF(1)}
              style={f === 1 ? styles.select_press : styles.select_press2}>
              <Text style={f === 1 ? styles.select_text : styles.select_text2}>
                Tasks
              </Text>
            </Pressable>
          </View>
          <View style={styles.select_container}>
            <Pressable
              onPress={() => setF(2)}
              style={f === 2 ? styles.select_press : styles.select_press2}>
              <Text style={f === 2 ? styles.select_text : styles.select_text2}>
                Events
              </Text>
            </Pressable>
          </View>
          <View style={styles.select_container}>
            <Pressable
              onPress={() => setF(3)}
              style={f === 3 ? styles.select_press : styles.select_press2}>
              <Text style={f === 3 ? styles.select_text : styles.select_text2}>
                All
              </Text>
            </Pressable>
          </View>
        </View>

        <Header focused={focused} setFocused={setFocused} />
        <View>
          {f === 2 ? (
            <Events
              focused={focused}
              {...props}
              EventsList={EventsList}
              TasksList={TasksList}
            />
          ) : null}
          {f === 3 ? (
            <All
              focused={focused}
              {...props}
              EventsList={EventsList}
              TasksList={TasksList}
            />
          ) : null}
          {f === 1 ? (
            <Tasks
              focused={focused}
              {...props}
              EventsList={EventsList}
              TasksList={TasksList}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
