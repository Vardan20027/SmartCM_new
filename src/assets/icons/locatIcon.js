import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function SvgComponent(props) {
  return (
    <Svg
      width={Sizes.size16}
      height={Sizes.size19}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 8.375C.5 4.235 3.892.89 7.994.89c4.114 0 7.506 3.346 7.506 7.486 0 2.086-.744 4.023-1.968 5.665a19.624 19.624 0 01-4.89 4.626c-.428.287-.815.308-1.286 0a19.247 19.247 0 01-4.888-4.626C1.243 12.398.5 10.46.5 8.375zm5.024.233a2.464 2.464 0 002.47 2.478 2.474 2.474 0 002.482-2.478c0-1.376-1.12-2.52-2.482-2.52-1.36 0-2.47 1.144-2.47 2.52z"
        fill={'#347474'}
      />
    </Svg>
  );
}

export default SvgComponent;
