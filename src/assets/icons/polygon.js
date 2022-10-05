import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
import {Shadow} from 'react-native-apply-shadow';
import {View} from 'react-native';

function PolygIcon(props) {
  const {iconColor, iconWidth, iconHeight, children} = props;
  return (
    <Svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 99 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <View>
        <G filter="url(#filter0_d_707_678)">
          <Path
            d="M45.292 68.263c1.967 3.066 6.449 3.066 8.416 0l13.5-21.039c8.986-14.003-1.07-32.403-17.708-32.403-16.638 0-26.694 18.4-17.708 32.403l13.5 21.04z"
            fill={iconColor}
          />
        </G>

        <Defs />
      </View>
    </Svg>
  );
}

export default PolygIcon;
