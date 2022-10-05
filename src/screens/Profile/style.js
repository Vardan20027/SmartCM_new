import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginTop: Sizes.size30,
      fontFamily: Fonts.medium,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size18,
      lineHeight: Sizes.size24,
      color: '#11493E',
    },
    pages: {
      marginTop: Sizes.size30,
      width: Sizes.size320,
      padding: Sizes.size8,
      height: Sizes.size35,
      justifyContent: 'center',
      borderBottomWidth: Sizes.size1,
      borderColor: '#E3E3E3',
    },
    pages_container: {
      marginTop: Sizes.size10,
      width: Sizes.size320,
      padding: Sizes.size8,
      height: Sizes.size35,
      justifyContent: 'center',
      borderBottomWidth: Sizes.size1,
      borderColor: '#E3E3E3',
    },
    pages_title: {
      fontFamily: Fonts.regular,
      fontSize: Sizes.size12,
      lineHeight: Sizes.size15,
      fontWeight: '400',
      color: '#000000',
    },
  });
};

export {Styles};
