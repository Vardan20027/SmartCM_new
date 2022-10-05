import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      alignItems: 'center',
    },
    title: {
      fontFamily: Fonts.regular,
      marginTop: Sizes.size10,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size24,
      color: '#11493E',
    },
    select_container: {
      width: Sizes.size316,
      flexDirection: 'row',
      backgroundColor: '#E7F2F2',
      marginTop: Sizes.size30,
      borderRadius: Sizes.size6,
    },
    select_press_container: {
      flex: 0.5,
    },
    bottomSheet: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
    },
    select_press_passive: {
      height: Sizes.size28,
      backgroundColor: '#E7F2F2',
      borderRadius: Sizes.size4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    select_press_active: {
      height: Sizes.size28,
      backgroundColor: '#347474',
      borderRadius: Sizes.size4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    press_text_passive: {
      fontFamily: Fonts.regular,
      color: '#11493E',
      fontSize: Sizes.size14,
    },
    press_text_active: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
    mark_text: {
      fontFamily: Fonts.regular,
      color: '#347474',
    },
    mark_all_press: {
      marginTop: Sizes.size10,
      alignSelf: 'flex-end',
      right: Sizes.size35,
      padding: Sizes.size5,
    },
    empty_container: {
      margin: Sizes.size10,
    },
    empty_text: {
      fontFamily: Fonts.regular,
    },
  });
};

export {Styles};
