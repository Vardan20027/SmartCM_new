import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      margin: Sizes.size85,
      maxWidth: Sizes.size192,
      maxHeight: Sizes.size218,
    },
    title: {
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size24,
      color: '#11493E',
    },
    subtitle: {
      fontFamily: Fonts.regular,
      margin: Sizes.size10,
    },
    email_container: {
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
    email_input: {
      fontFamily: Fonts.regular,
      width: Sizes.size280,
      height: Sizes.size45,
      marginLeft: Sizes.size10,
    },
    textInput1: {
      fontFamily: Fonts.regular,
      width: Sizes.size250,
      height: Sizes.size45,
      marginLeft: Sizes.size10,
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
    button_text: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
    back_press_container: {
      marginTop: Sizes.size10,
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginLeft: Sizes.size210,
    },
    back_container: {
      flexDirection: 'row',
      padding: Sizes.size5,
    },
    back_text: {
      fontFamily: Fonts.regular,
    },
    back_login_text: {
      color: '#11493E',
      fontFamily: Fonts.regular,
      marginLeft: Sizes.size5,
    },
  });
};

export {Styles};
