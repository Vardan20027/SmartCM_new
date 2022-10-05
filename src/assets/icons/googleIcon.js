import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function SvgComponent(props) {
  return (
    <Svg
      width={Sizes.size28}
      height={Sizes.size28}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
      viewBox="0 0 512 512"
      {...props}>
      <Rect rx="15%" fill="#fff" />
      <Path
        fill="#4285f4"
        d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
      />
      <Path
        fill="#34a853"
        d="M90 341a192 192 0 00296 59l-62-48c-53 35-141 22-171-60z"
      />
      <Path
        fill="#fbbc02"
        d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
      />
      <Path
        fill="#ea4335"
        d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
      />
    </Svg>
  );
}

export default SvgComponent;
