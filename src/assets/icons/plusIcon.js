import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function PlusIcon({iconColor}) {
  return (
    <Svg
      width={Sizes.size15}
      height={Sizes.size15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.239 8.821h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z"
        fill={iconColor || '#FCFCFC'}
      />
    </Svg>
  );
}

export default PlusIcon;
