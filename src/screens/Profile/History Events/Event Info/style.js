import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginTop: Sizes.size30,
      fontFamily: Fonts.bold,
      fontStyle: 'normal',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      letterSpacing: 0.25,
      color: '#1B3131',
    },
    image: {
      maxWidth: Sizes.size318,
      maxHeight: Sizes.size150,
      borderRadius: Sizes.size10,
      marginTop: Sizes.size30,
    },
    subTitle: {
      marginTop: Sizes.size20,
      fontFamily: Fonts.medium,
      fontSize: Sizes.size16,
      color: '#1B3131',
    },
    content: {
      width: Sizes.size313,
    },
    info_container: {
      flexDirection: 'row',
      marginTop: Sizes.size20,
    },
    info_icon: {
      width: Sizes.size23,
      height: Sizes.size23,
      backgroundColor: '#E9F1F1',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: Sizes.size5,
      borderRadius: Sizes.size4,
    },
    info: {
      fontFamily: Fonts.regular,
    },
    header: {
      alignSelf: 'flex-start',
      marginTop: Sizes.size20,
      fontFamily: Fonts.medium,
      fontSize: Sizes.size14,
      color: '#616062',
      marginBottom: Sizes.size20,
    },
    description: {
      fontFamily: Fonts.regular,
      fontSize: Sizes.size14,
    },
    src_image: {
      maxWidth: Sizes.size23,
      maxHeight: Sizes.size23,
      borderRadius: Sizes.size4,
    },
    member_container: {
      flexDirection: 'row',
      marginBottom: Sizes.size10,
    },
    member_info_container: {
      marginLeft: Sizes.size10,
    },
    member_image: {
      maxWidth: Sizes.size50,
      maxHeight: Sizes.size50,
      borderRadius: Sizes.size20,
    },
    member_info: {
      fontFamily: Fonts.medium,
      fontSize: Sizes.size14,
    },
  });
};

export {Styles};
