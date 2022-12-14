import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function ProfileIcon({iconColor}) {
  return (
    <Svg
      width={Sizes.size16}
      height={Sizes.size17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 2.821c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c2.7 0 5.8 1.29 6 2H2c.23-.72 3.31-2 6-2zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill={iconColor || '#FCFCFC'}
      />
    </Svg>
  );
}

export default ProfileIcon;
