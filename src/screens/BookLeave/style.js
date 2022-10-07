import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginTop: Sizes.size20,
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size16,
      color: '#1B3131',
      lineHeight: Sizes.size24,
    },
    subtitle: {
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '500',
      fontSize: Sizes.size14,
      lineHeight: Sizes.size16,
      color: '#616062',
      marginTop: Sizes.size22,
      right: Sizes.size60,
    },
    input_container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: Sizes.size313,
      height: Sizes.size45,
      borderBottomWidth: Sizes.size1,
      borderColor: '#E3E3E3',
    },
    input: {
      fontFamily: Fonts.regular,
      color: '#818195',
      marginLeft: Sizes.size10,
      padding: Sizes.size5,
    },
    arrow: {
      position: 'absolute',
      right: Sizes.size5,
      top: Sizes.size15,
      padding: Sizes.size5,
    },
    calendar: {
      minHeight: Sizes.size350,
      minWidth: Sizes.size310,
      marginTop: Sizes.size15,
      borderRadius: Sizes.size6,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    desc: {
      alignItems: 'flex-start',
      borderRadius: Sizes.size6,
      marginTop: Sizes.size20,
      width: Sizes.size313,
      minHeight: Sizes.size25,
      borderWidth: Sizes.size1,
      borderColor: '#E3E3E3',
    },
    button: {
      marginTop: Sizes.size10,
      width: Sizes.size313,
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
  });
};

export {Styles};
