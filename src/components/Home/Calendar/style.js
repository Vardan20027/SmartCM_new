import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      marginTop: Sizes.size30,
      marginRight: Sizes.size15,
      flexDirection: 'row',
    },
    date: {
      fontFamily: Fonts.bold,
      fontSize: Sizes.size14,
      lineHeight: Sizes.size16,
      letterSpacing: 0.25,
      color: '#1B3131',
      marginLeft: Sizes.size24,
      marginRight: Sizes.size170,
      width: Sizes.size120,
    },
    icon: {
      padding: Sizes.size3,
      bottom: Sizes.size8,
      width: Sizes.size30,
    },
    calendar: {
      width: Sizes.size320,
      height: Sizes.size320,
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
    calendar_2: {
      flex: 1,
      width: Sizes.size368,
      height: Sizes.size390,
      backgroundColor: '#F5F5F5',
    },
  });
};

export {Styles};
