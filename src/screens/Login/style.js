import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      maxWidth: Sizes.size263,
      maxHeight: Sizes.size241,
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Sizes.size50,
    },
    selectLogMethod: {
      marginVertical: Sizes.size10,
      flexDirection: 'row',
    },
    eyePress: {
      padding: Sizes.size10,
    },
    forgot_text: {
      fontFamily: Fonts.regular,
      padding: Sizes.size5,
    },
    countryCode: {
      fontFamily: Fonts.regular,
      marginLeft: Sizes.size10,
      color: 'black',
    },
    socialLog_text: {
      marginTop: Sizes.size20,
      fontFamily: Fonts.regular,
    },
    text: {
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size24,
      color: '#11493E',
      padding: Sizes.size10,
    },
    input: {
      flexDirection: 'row',
      margin: Sizes.size10,
      width: Sizes.size330,
      height: Sizes.size45,
      borderWidth: Sizes.size1,
      borderColor: '#DEDEDE',
      padding: Sizes.size10,
      borderRadius: Sizes.size4,
      alignItems: 'center',
    },
    textInput: {
      fontFamily: Fonts.regular,
      width: Sizes.size280,
      height: Sizes.size45,
      marginLeft: Sizes.size10,
    },
    pass_input: {
      fontFamily: Fonts.regular,
      width: Sizes.size250,
      height: Sizes.size45,
      marginLeft: Sizes.size10,
    },
    phone_input: {
      fontFamily: Fonts.regular,
      maxWidth: Sizes.size270,
      height: Sizes.size45,
    },
    button: {
      marginTop: Sizes.size10,
      width: Sizes.size329,
      height: Sizes.size45,
      backgroundColor: '#11493E',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Sizes.size4,
    },
    forgot: {
      marginTop: Sizes.size10,
      alignItems: 'flex-end',
      marginLeft: Sizes.size210,
    },
    butText: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
    socialLog: {
      flexDirection: 'row',
      padding: Sizes.size5,
      alignItems: 'center',
    },
    googleSt: {
      padding: Sizes.size5,
      marginRight: Sizes.size5,
    },
    fbSt: {
      padding: Sizes.size5,
    },
    email: {
      padding: Sizes.size10,
      marginRight: Sizes.size10,
      borderRadius: Sizes.size4,
      backgroundColor: '#FCFCFC',
    },
    email1: {
      padding: Sizes.size10,
      marginRight: Sizes.size10,
      borderRadius: Sizes.size4,
      backgroundColor: '#11493E',
    },
    emailText: {
      color: '#11493E',
      fontFamily: Fonts.regular,
    },
    emailText1: {
      color: '#FCFCFC',
      fontFamily: Fonts.regular,
    },
  });
};

export {Styles};
