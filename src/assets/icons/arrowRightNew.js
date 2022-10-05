import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function SvgComponent(props) {
  return (
    <Svg
      width={Sizes.size25}
      height={Sizes.size25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G
        clipPath="url(#clip0_26_8539)"
        stroke={'#11493E'}
        strokeWidth={Sizes.size2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M19.828 12.025h-14M13.828 18.025l6-6M13.828 6.025l6 6" />
      </G>
      <Defs>
        <ClipPath id="clip0_26_8539">
          <Path
            fill={'#fff'}
            transform="rotate(90 12.401 12.427)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
