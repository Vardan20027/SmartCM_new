import {StyleSheet} from 'react-native';
import {Fonts, Sizes} from '../../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      bottom: Sizes.size20,
    },
    bar_container: {
      position: 'relative',
    },
    bar: {
      data: {fill: '#83B7AD', width: Sizes.size18},
    },
    axis_container: {
      position: 'absolute',
      bottom: Sizes.size3,
    },
    axis: {
      axis: {stroke: 'transparent'},
      tickLabels: {
        fontFamily: Fonts.regular,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: Sizes.size16,
        lineHeight: Sizes.size20,
        fill: '#616062',
      },
    },
  });
};

export {Styles};
