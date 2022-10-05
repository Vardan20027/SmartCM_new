import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      position: 'relative',
    },
    title: {
      marginTop: Sizes.size82,
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#1B3131',
    },
    input: {
      fontFamily: Fonts.regular,
      color: '#818195',
      marginLeft: Sizes.size10,
    },
    title_input_container: {
      marginTop: Sizes.size50,
      width: Sizes.size313,
      borderBottomWidth: Sizes.size1,
      borderColor: '#E3E3E3',
    },
    input_container: {
      marginTop: Sizes.size15,
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
      marginTop: Sizes.size80,
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
