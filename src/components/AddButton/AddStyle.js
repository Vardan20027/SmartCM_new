import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Sizes.size30,
    },
    secondaryButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: Sizes.size42,
      height: Sizes.size42,
      borderRadius: Sizes.size24,
      backgroundColor: '#347474',
    },
    pressable: {
      alignItems: 'center',
      justifyContent: 'center',
      width: Sizes.size77,
      height: Sizes.size60,
    },
  });
};

export {styles};
