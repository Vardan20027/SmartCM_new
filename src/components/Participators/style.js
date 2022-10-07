import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      marginLeft: Sizes.size20,
    },

    view: {
      marginTop: Sizes.size15,
      width: Sizes.size335,
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: Sizes.size5,
    },

    viewText: {
      fontFamily: Fonts.regular,
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size14,
      lineHeight: Sizes.size16,
      letterSpacing: 0.25,
      color: '#616062',
    },
  });
};

export {Styles};
