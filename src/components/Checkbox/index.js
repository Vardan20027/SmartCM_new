import React, {useState} from 'react';
import {View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Styles} from './style';

function CheckboxComponent(props) {
  const [isActive, setIsActive] = useState(false);
  const styles = Styles();
  return (
    <View style={styles.container}>
      <CheckBox
        onValueChange={newValue => setIsActive(!isActive)}
        value={isActive}
      />
    </View>
  );
}

export default CheckboxComponent;
