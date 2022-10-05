import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontFamily: Fonts.bold,
      fontSize: Sizes.size24,
      color: '#1B3131',
      marginBottom: Sizes.size10,
    },
    description: {
      fontFamily: Fonts.regular,
      width: Sizes.size313,
      marginBottom: Sizes.size10,
    },
    input_container: {
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
    input: {
      fontFamily: Fonts.regular,
      width: Sizes.size250,
      height: Sizes.size65,
    },
    button: {
      marginTop: Sizes.size30,
      width: Sizes.size329,
      height: Sizes.size45,
      backgroundColor: '#11493E',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Sizes.size4,
    },
    button_txt: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
  });
};

export {Styles};
