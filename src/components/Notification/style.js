import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      width: Sizes.size313,
      height: Sizes.size35,
      flexDirection: 'row',
      margin: Sizes.size5,
      paddingHorizontal: Sizes.size3,
      alignItems: 'center',
    },
    image_container: {
      marginRight: Sizes.size15,
    },
    image: {
      maxWidth: Sizes.size32,
      maxHeight: Sizes.size32,
    },
    text: {
      fontFamily: Fonts.regular,
      paddingHorizontal: Sizes.size2,
      fontSize: Sizes.size12,
      color: '#2C2C2C',
    },
    unread: {
      position: 'absolute',
      right: 5,
    },
    action: {
      flexDirection: 'row',
    },
  });
};

export {Styles};
