import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: Sizes.size220,
      paddingBottom: Sizes.size220,
    },
    title: {
      fontFamily: Fonts.medium,
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#1B3131',
      marginTop: Sizes.size30,
    },
  });
};

export {Styles};
