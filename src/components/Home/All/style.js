import {StyleSheet} from 'react-native';
import {Sizes} from '../../../assets/RootStyle';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: Sizes.size365,
      marginTop: Sizes.size12,
    },
    content: {
      marginTop: Sizes.size12 * -1,
      height: Sizes.size420,
    },
  });
};

export {Styles};
