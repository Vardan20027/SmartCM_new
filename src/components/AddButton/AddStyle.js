import { StyleSheet } from "react-native";
import { Sizes } from "../../assets/RootStyle";

const Styles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },

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
    polygon_press: {
      alignItems: 'center',
      justifyContent: 'center',
      width: Sizes.size77,
      height: Sizes.size60,
    },
    polygon: {
      width: Sizes.size100,
      height: Sizes.size90,
    },
  });
};

export {styles};
