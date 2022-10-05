import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

const TaskStyles = () => {
  return StyleSheet.create({
    container: {
      marginLeft: 'auto',
      marginRight: 'auto',
      flexDirection: 'row',
      width: Sizes.size315,
      height: Sizes.size55,
      borderRadius: Sizes.size6,
      shadowColor: 'gray',
      shadowRadius: Sizes.size5,
      shadowOpacity: 0.3,
      margin: Sizes.size10,
      backgroundColor: '#EDF3F4',
    },
    content: {
      width: Sizes.size315,
      padding: Sizes.size5,
    },
    pressable_content: {
      flexDirection: 'row',
    },
    header: {
      fontSize: Sizes.size16,
      color: '#616062',
      fontFamily: Fonts.regular,
      fontWeight: '600',
      marginBottom: Sizes.size2,
    },
    project_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    project_content: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: Sizes.size9,
      height: Sizes.size16,
    },

    project: {
      fontSize: Sizes.size11,
      fontFamily: Fonts.regular,
      color: '#FCFCFC',
    },
    data: {
      color: '#949494',
      fontSize: Sizes.size12,
      fontFamily: Fonts.regular,
      marginRight: Sizes.size26,
    },
    flat_container: {
      flex: 1,
      width: Sizes.size365,
    },
    flat_content: {
      height: Sizes.size390,
      marginBottom: Sizes.size180,
    },
    date: {
      fontFamily: Fonts.bold,
      fontSize: Sizes.size14,
      color: '#1B3131',
      marginLeft: Sizes.size24,
      marginRight: Sizes.size170,
      width: Sizes.size120,
    },
  });
};

export {TaskStyles};
