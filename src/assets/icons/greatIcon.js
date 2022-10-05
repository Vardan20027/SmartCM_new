import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function SvgComponent(props) {
  return (
    <Svg
      width={Sizes.size65}
      height={Sizes.size66}
      viewBox="0 0 65 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M55 .205H10a10.01 10.01 0 00-10 10v45a10.01 10.01 0 0010 10h45a10.01 10.01 0 0010-10v-45a10.011 10.011 0 00-10-10zm-5.586 21.608l-21 25a2.501 2.501 0 01-1.875.892h-.042a2.501 2.501 0 01-1.858-.828l-9-10a2.5 2.5 0 113.716-3.344l7.076 7.862 19.155-22.798a2.5 2.5 0 013.828 3.216z"
        fill="#347474"
      />
    </Svg>
  );
}

export default SvgComponent;
