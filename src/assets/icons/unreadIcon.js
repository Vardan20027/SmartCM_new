import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function SvgComponent(props) {
  const {iconColor, iconWidth, iconHeight} = props;
  return (
    <Svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        y={0.457153}
        width={Sizes.size8}
        height={Sizes.size8}
        rx={Sizes.size4}
        fill={iconColor}
      />
    </Svg>
  );
}

export default SvgComponent;
