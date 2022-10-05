import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      width: Sizes.size350,
      height: Sizes.size280,
      backgroundColor: '#f5f5f5',
      marginTop: Sizes.size20,
      borderRadius: Sizes.size10,
      marginBottom: Sizes.size20,
      shadowColor: 'gray',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    months_axis: {
      axis: {stroke: 'none'},
      tickLabels: {
        fontFamily: Fonts.regular,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: Sizes.size11,
        lineHeight: Sizes.size13,
        fill: '#616062',
      },
    },
    axis: {
      axis: {stroke: 'none'},
      grid: {stroke: '#E4E4E4'},
      tickLabels: {
        fontFamily: Fonts.regular,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: Sizes.size11,
        lineHeight: Sizes.size13,
        fill: '#616062',
      },
    },
    line: {
      data: {stroke: '#347474'},
      parent: {border: '2px solid #347474'},
    },
    scatter: {
      data: {fill: '#347474', stroke: '#fff', strokeWidth: 3},
    },
  });
};

export {Styles};
