import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    title_container: {
      marginTop: Sizes.size30,
    },
    title: {
      fontFamily: Fonts.medium,
      letterSpacing: 0.25,
      fontWeight: '500',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#11493E',
    },
    header_container: {
      alignSelf: 'flex-start',
      margin: Sizes.size22,
    },
    header: {
      fontFamily: Fonts.bold,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#11493E',
    },
    schedule_header_container: {
      alignSelf: 'flex-start',
      marginHorizontal: Sizes.size22,
    },
    schedule_header: {
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#11493E',
    },
  });
};

export {Styles};
