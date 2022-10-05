import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginTop: Sizes.size10,
      fontFamily: Fonts.bold,
      fontStyle: 'normal',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      letterSpacing: 0.25,
      color: '#1B3131',
    },
    image: {
      maxWidth: Sizes.size60,
      maxHeight: Sizes.size60,
      borderRadius: Sizes.size4,
      marginRight: Sizes.size30,
    },
    content: {
      flexDirection: 'row',
      marginTop: Sizes.size20,
      height: Sizes.size85,
      paddingBottom: Sizes.size10,
      borderBottomWidth: Sizes.size1,
      alignItems: 'center',
      borderColor: '#E3E3E3',
      // backgroundColor: 'red',
    },
    project_info: {
      width: Sizes.size180,
      marginRight: Sizes.size30,
    },
    project_title: {
      fontFamily: Fonts.medium,
      fontSize: Sizes.size16,
      color: '#616062',
    },
    description: {
      fontFamily: Fonts.regular,
      color: '#949494',
    },
    flat: {
      paddingBottom: Sizes.size100,
    },
  });
};

export {Styles};
