import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {Styles} from './style';
import UserIcon from '../../assets/icons/user';
import PassIcon from '../../assets/icons/password';
import ShowPassIcon from '../../assets/icons/showPass';
import HidePassIcon from '../../assets/icons/hidePass';
import PhoneIcon from '../../assets/icons/phoneIcon';
import GoogleIcon from '../../assets/icons/googleIcon';
import FbIcon from '../../assets/icons/fbIcon';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import dispatch from '../../hook/dispatch/dispatch';
import {USER_REQUEST} from '../../store/actions/types/userTypes';

const LoginScreen = ({navigation}) => {
  const styles = Styles();
  GoogleSignin.configure({
    webClientId:
      '882780756177-6oillgi9iht3ivnrjheup5gnlgdedvab.apps.googleusercontent.com',
  });

  const [f, setF] = useState(1);
  const [confirm, setConfirm] = useState(null);
  const [phone, setPhone] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  // PHONE AUTH
  async function signInWithPhoneNumber(phoneNumber) {
    if (!phone) {
      alert("Phone number couldn't be empty");
    } else {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      console.log(confirm);
      navigation.navigate('Verification', {confirm, phone});
    }
  }

  // GOOGLE AUTH
  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)
      .then(user => {
        dispatch(USER_REQUEST, user);
        navigation.navigate('Tab');
        console.log('Signed in with Google!');
      })
      .catch(error => {
        console.log(error);
      });
  }

  // FB AUTH
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(facebookCredential)
      .then(user => {
        dispatch(USER_REQUEST, user);
        navigation.navigate('Tab');
        console.log('Signed in with Facebook!');
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.container2}>
        <Image
          source={require('../../assets/images/login_image.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Log in</Text>
        <View style={styles.selectLogMethod}>
          <TouchableOpacity
            style={f === 2 ? styles.email : styles.email1}
            onPress={() => setF(1)}>
            <Text style={f === 2 ? styles.emailText : styles.emailText1}>
              Email/Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={f === 1 ? styles.email : styles.email1}
            onPress={() => setF(2)}>
            <Text style={f === 1 ? styles.emailText : styles.emailText1}>
              Phone Number
            </Text>
          </TouchableOpacity>
        </View>
        {f === 1 ? (
          <>
            <View style={styles.input}>
              <UserIcon />
              <TextInput placeholder="Email" style={styles.textInput} />
            </View>

            <View style={styles.input}>
              <PassIcon />
              <TextInput
                placeholder="Password"
                secureTextEntry={isSecureEntry}
                style={styles.pass_input}
              />
              <Pressable
                style={styles.eyePress}
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                {isSecureEntry ? <ShowPassIcon /> : <HidePassIcon />}
              </Pressable>
            </View>
          </>
        ) : null}
        {f === 2 ? (
          <View style={styles.input}>
            <PhoneIcon />
            <Text style={styles.countryCode}>+374</Text>
            <TextInput
              placeholder="98123456"
              keyboardType={'phone-pad'}
              maxLength={8}
              style={styles.phone_input}
              value={phone}
              onChangeText={text => setPhone(text)}
            />
          </View>
        ) : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            f === 2
              ? signInWithPhoneNumber(`+374 ${phone}`)
              : navigation.navigate('Tab');
          }}>
          <Text style={styles.butText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.forgot}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Forgot');
            }}>
            {f === 1 ? (
              <Text style={styles.forgot_text}>Forgot password?</Text>
            ) : null}
          </TouchableOpacity>
        </View>
        <Text style={styles.socialLog_text}>Or sign in with</Text>
        <View style={styles.socialLog}>
          <TouchableOpacity
            style={styles.googleSt}
            onPress={() => onGoogleButtonPress()}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fbSt}
            onPress={() => onFacebookButtonPress()}>
            <FbIcon />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
