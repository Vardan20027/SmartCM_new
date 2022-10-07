import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    page: {
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
    close: {
      left: Sizes.size150,
      width: Sizes.size20,
      height: Sizes.size20,
      padding: Sizes.size5,
    },
    time2: {
      left: Sizes.size3,
      marginTop: Sizes.size5,
      width: Sizes.size338,
      height: Sizes.size35,
      padding: Sizes.size5,
      borderWidth: Sizes.size1,
      borderColor: '#347474',
      borderRadius: Sizes.size4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flat: {
      width: Sizes.size342,
      marginTop: Sizes.size24,
    },
    time: {
      width: Sizes.size105,
      height: Sizes.size35,
      padding: Sizes.size5,
      borderWidth: Sizes.size1,
      borderColor: '#347474',
      borderRadius: Sizes.size4,
      margin: Sizes.size5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    time1: {
      width: Sizes.size105,
      height: Sizes.size35,
      padding: Sizes.size5,
      borderWidth: Sizes.size1,
      backgroundColor: '#347474',
      borderRadius: Sizes.size4,
      margin: Sizes.size5,
      justifyContent: 'center',
      alignItems: 'center',
    },

    container: {
      flex: 1,
      padding: Sizes.size24,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchable: {
      marginTop: Sizes.size50,
      width: Sizes.size313,
      height: Sizes.size45,
      backgroundColor: '#11493E',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Sizes.size4,
    },
    text2: {
      fontFamily: Fonts.regular,
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size14,
      lineHeight: Sizes.size16,
      letterSpacing: 0.25,
      color: '#616062',
      marginTop: Sizes.size24,
    },
    textFlat: {
      fontFamily: Fonts.regular,
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size14,
      lineHeight: Sizes.size16,
      letterSpacing: 0.25,
      color: '#949494',
    },
    text: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
    title: {
      fontFamily: Fonts.bold,
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      letterSpacing: 0.25,
      color: '#11493E',
      marginTop: Sizes.size20,
    },
  });
};

export {Styles};
