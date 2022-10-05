import React, {useEffect} from 'react';
import {Keyboard, TextInput} from 'react-native';

export function Input(props) {
  const {...p} = props;
  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      props.navigation.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    });
    Keyboard.addListener('keyboardDidShow', () => {
      props.navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    });
  }, []);
  return (
    <>
      <TextInput
        {...p}
        onFocus={() =>
          props.navigation.setOptions({
            tabBarStyle: {display: 'none'},
          })
        }
        onBlur={() =>
          props.navigation.setOptions({
            tabBarStyle: {display: 'flex'},
          })
        }
      />
    </>
  );
}
