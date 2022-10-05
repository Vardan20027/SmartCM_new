import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import {Sizes} from '../../assets/RootStyle';
import * as RootNavigation from '../../navigation/RootNavigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const ProfileScreen = () => {
  const styles = Styles();

  async function signOut() {
    try {
      await GoogleSignin.signOut();
      console.log('Signed out from Google!');
      RootNavigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity
        style={styles.pages}
        onPress={() => {
          RootNavigation.navigate('History Tasks');
        }}>
        <Text style={styles.pages_title}>History tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.pages_container}
        onPress={() => {
          RootNavigation.navigate('History Events');
        }}>
        <Text style={styles.pages_title}>History events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.pages_container}
        onPress={() => {
          RootNavigation.navigate('Projects');
        }}>
        <Text style={styles.pages_title}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.pages_container}
        onPress={() => signOut()}>
        <Text style={styles.pages_title}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
