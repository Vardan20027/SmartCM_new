import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function SvgComponent(props) {
  const {iconColor, iconWidth, iconHeight, strokeWidth} = props;
  return (
    <Svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.487 10.71l2.925-4.39-2.925-4.391"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
