import {StyleSheet} from 'react-native';
import {Sizes} from '../../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    page: {
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    close: {
      marginTop: Sizes.size23,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginRight: Sizes.size23,
      padding: Sizes.size5,
    },
    content: {
      alignItems: 'center',
      marginTop: Sizes.size17,
    },
    text: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      letterSpacing: 0.25,
      color: '#11493E',
      marginTop: Sizes.size32,
    },
    text1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size14,
      lineHeight: Sizes.size16,
      letterSpacing: 0.25,
      color: '#6B6A6C',
      marginTop: Sizes.size29,
    },
  });
};

export {styles};
