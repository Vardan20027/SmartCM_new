import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      marginBottom: Sizes.size220,
      paddingBottom: Sizes.size220,
    },
    title: {
      alignSelf: 'center',
      fontFamily: Fonts.medium,
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#1B3131',
      marginTop: Sizes.size30,
    },
    content: {
      flexDirection: 'row',
      padding: Sizes.size10,
    },
    event_types_container: {
      position: 'absolute',
      right: Sizes.size5,
      top: Sizes.size80,
    },
    event_types_content: {
      flexDirection: 'row',
      height: Sizes.size30,
      alignItems: 'center',
    },
    event_type: {
      fontFamily: Fonts.regular,
      marginHorizontal: Sizes.size5,
      color: '#151522',
    },
    search_bar: {
      position: 'absolute',
      borderWidth: Sizes.size1,
      borderColor: '#D1CDCD',
      borderRadius: Sizes.size4,
      paddingLeft: Sizes.size10,
      width: Sizes.size330,
      marginTop: Sizes.size270,
      marginLeft: Sizes.size20,
      flexDirection: 'row',
    },
    search_input: {
      fontFamily: Fonts.regular,
      width: '80%',
    },
    calendar_icon: {
      position: 'absolute',
      right: Sizes.size10,
      alignSelf: 'center',
    },
    events_list: {
      marginTop: Sizes.size300,
      height: '100%',
      alignSelf: 'center',
      paddingBottom: Sizes.size420,
    },
  });
};

export {Styles};
