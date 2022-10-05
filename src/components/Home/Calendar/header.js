import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Calendar2Icon from '../../../assets/icons/calendar2';
import {Styles} from './style';
import moment from 'moment';

function Header({focused, setFocused}) {
  const currentDate = moment().format('DD MMM YYYY');
  const styles = Styles();
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{currentDate}</Text>
      <TouchableOpacity
        onPress={() => {
          setFocused(!focused);
        }}
        style={styles.icon}>
        <Calendar2Icon
          iconColor1={focused ? '#F5F5F5' : '#347474'}
          iconColor2={focused ? '#347474' : '#F5F5F5'}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
