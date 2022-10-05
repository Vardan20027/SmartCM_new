import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  const {iconColor, iconWidth, iconHeight} = props;
  return (
    <Svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M5.578 6.423l-5.196-6h10.392l-5.196 6z" fill={iconColor} />
    </Svg>
  );
}

export default SvgComponent;
