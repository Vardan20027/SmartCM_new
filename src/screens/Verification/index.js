import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';

function Verification(props) {
  const [code, setCode] = useState('');
  const confirm = props.route.params.confirm;
  const phone = props.route.params.phone;
  const styles = Styles();
  async function confirmCode() {
    try {
      console.log(code);
      await confirm.confirm(code);
      props.navigation.navigate('Tab');
    } catch (error) {
      alert('Invalid code.');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Code</Text>
      <Text style={styles.description}>
        A 6-digit code has been sent to your mobile number +374
        {phone.slice(-8, -6)}****{phone.slice(-2)}
      </Text>
      <View style={styles.input_container}>
        <TextInput
          placeholder={'******'}
          keyboardType={'number-pad'}
          maxLength={6}
          style={styles.input}
          value={code}
          onChangeText={text => setCode(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => confirmCode()}>
        <Text style={styles.button_txt}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Verification;
