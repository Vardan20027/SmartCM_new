import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
      marginTop: Sizes.size10,
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size16,
      color: '#1B3131',
      lineHeight: Sizes.size24,
    },
    subText: {
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '500',
      fontSize: Sizes.size14,
      lineHeight: Sizes.size16,
      color: '#616062',
      marginTop: Sizes.size16,
      right: Sizes.size80,
    },
    input: {
      fontFamily: Fonts.regular,
      color: '#1D1D1D',
    },
    input_default: {
      fontFamily: Fonts.regular,
      color: '#818195',
    },
    inpView: {
      marginTop: Sizes.size3,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: Sizes.size313,
      height: Sizes.size45,
      borderBottomWidth: Sizes.size1,
      borderColor: '#E3E3E3',
    },
    touch: {
      padding: Sizes.size5,
    },
    calendar: {
      position: 'absolute',
      right: Sizes.size5,
      top: Sizes.size10,
      padding: Sizes.size5,
    },
    button: {
      marginTop: Sizes.size5,
      width: Sizes.size313,
      height: Sizes.size45,
      backgroundColor: '#11493E',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Sizes.size4,
    },
    butText: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
    desc: {
      alignItems: 'flex-start',
      borderRadius: Sizes.size6,
      marginTop: Sizes.size10,
      width: Sizes.size313,
      height: Sizes.size75,
      borderWidth: Sizes.size1,
      borderColor: '#E3E3E3',
    },
  });
};

export {Styles};
