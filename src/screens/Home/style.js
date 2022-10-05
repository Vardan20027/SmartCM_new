import {StyleSheet} from 'react-native';
import {Sizes, Fonts} from '../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: Sizes.size6,
      backgroundColor: '#F5F5F5',
    },
    content: {
      width: Sizes.size315,
      alignItems: 'center',
      // borderWidth: Sizes.size1,
      // borderColor: 'red',
    },
    text: {
      position: 'absolute',
      width: Sizes.size200,
      left: 0,
      marginTop: Sizes.size10,
      fontFamily: Fonts.regular,
      letterSpacing: 0.25,
      fontWeight: '600',
      fontSize: Sizes.size24,
      color: '#11493E',
      marginRight: Sizes.size153,
    },
    selectView: {
      width: Sizes.size310,
      flexDirection: 'row',
      backgroundColor: '#347474',
      marginTop: Sizes.size30,
      borderRadius: Sizes.size4,
    },
    select_container: {
      flex: 0.333,
    },
    select_press2: {
      height: Sizes.size28,
      backgroundColor: '#347474',
      borderRadius: Sizes.size4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    select_press: {
      height: Sizes.size28,
      backgroundColor: '#E7F2F2',
      borderRadius: Sizes.size4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: Sizes.size315,
      height: Sizes.size145,
      marginTop: Sizes.size60,
    },
    date: {
      fontFamily: Fonts.regular,
      fontSize: Sizes.size14,
      color: '#1B3131',
      marginRight: Sizes.size210,
      width: Sizes.size120,
    },
    select_text: {
      fontFamily: Fonts.regular,
      color: '#101010',
      fontSize: Sizes.size14,
    },
    select_text2: {
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
  });
};

export {Styles};
