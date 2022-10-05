import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      width: Sizes.size350,
      height: Sizes.size350,

      backgroundColor: '#f5f5f5',
      borderRadius: Sizes.size10,
      marginBottom: Sizes.size120,
      shadowColor: 'gray',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    chart_container: {
      marginTop: Sizes.size60 * -1,
    },
    months_axis: {
      axis: {stroke: 'none'},
      tickLabels: {
        fontFamily: Fonts.regular,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: Sizes.size16,
        lineHeight: Sizes.size20,
        fill: '#616062',
      },
    },
    bar: {
      data: {fill: '#F4C584', width: Sizes.size7},
    },
    icon: {
      flexDirection: 'row',
      width: Sizes.size300,
      height: Sizes.size30,
      alignItems: 'center',
    },
    title: {
      fontFamily: Fonts.regular,
      marginHorizontal: Sizes.size5,
      color: '#151522',
    },
    duration: {
      fontFamily: Fonts.regular,
      position: 'absolute',
      color: '#151522',
      right: 0,
    },
  });
};

export {Styles};
