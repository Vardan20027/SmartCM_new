import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    tabBar: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: Sizes.size149,
      bottom: Sizes.size90,
      width: Sizes.size77,
    },
    container: {
      backgroundColor: 'transparent',
      left: Sizes.size18,
      bottom: Sizes.size10,
      position: 'absolute',
      alignItems: 'center',
      zIndex: 1,
    },
    background: {
      width: Sizes.size340,
      height: Sizes.size70,
    },
    content: {
      flexDirection: 'row',
      marginBottom: Sizes.size10,
    },
    icons_container: {
      flex: 1,
      alignItems: 'center',
      zIndex: 1,
      marginTop: Sizes.size60 * -1,
    },
    focused_icon: {
      width: Sizes.size44,
      height: Sizes.size44,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Sizes.size50,
    },
    unfocused_icon: {
      width: Sizes.size44,
      height: Sizes.size44,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export {Styles};
