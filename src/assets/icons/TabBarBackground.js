import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function TabBarBack(props) {
  return (
    <Svg
      width={Sizes.size340}
      height={Sizes.size71}
      viewBox="0 0 340 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0 25.821c0-13.807 11.193-25 25-25h105.505a20 20 0 0116.458 8.636l13.329 19.304c4.724 6.842 14.806 6.923 19.639.157l14.087-19.721A19.998 19.998 0 01210.292.82H315c13.807 0 25 11.193 25 25v20c0 13.807-11.193 25-25 25H186.408a15.47 15.47 0 01-10.939-4.53 7.734 7.734 0 00-10.938 0 15.47 15.47 0 01-10.939 4.53H25c-13.807 0-25-11.193-25-25v-20z"
        fill={'#347474'}
      />
    </Svg>
  );
}

export default TabBarBack;
