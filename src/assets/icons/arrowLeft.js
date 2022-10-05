import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {iconWidth, iconHeight, iconColor, strokeWidth} = props;
  return (
    <Svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 5 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.925 10.71L1 6.32l2.925-4.391"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
