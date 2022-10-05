import React from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {Styles} from './style';
import UserIcon from '../../assets/icons/user';
import {Fonts, Sizes} from '../../assets/RootStyle';
import {useNavigation} from '@react-navigation/native';

const ForgotScreen = props => {
  const styles = Styles();
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/forgot_image.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your email address and we'll email you your new password
        </Text>
        <View style={styles.email_container}>
          <UserIcon />
          <TextInput placeholder="Email" style={styles.email_input} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Send</Text>
        </TouchableOpacity>
        <View style={styles.back_press_container}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <View style={styles.back_container}>
              <Text style={styles.back_text}>Back To</Text>
              <Text style={styles.back_login_text}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotScreen;
