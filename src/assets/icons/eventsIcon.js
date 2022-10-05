import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function EventsIcon(props) {
  return (
    <Svg
      width={Sizes.size25}
      height={Sizes.size25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21.146 4.87a1.5 1.5 0 00-1.5-1.5h-3v-1.5h-1.5v1.5h-6v-1.5h-1.5v1.5h-3a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h3v-1.5h-3v-15h3v1.5h1.5v-1.5h6v1.5h1.5v-1.5h3v4.5h1.5v-4.5z"
        fill="#FCFCFC"
      />
      <Path
        d="M15.896 11.62l1.912 3.704 4.088.593-3 2.883.75 4.07-3.75-1.921-3.75 1.921.75-4.07-3-2.883 4.2-.593 1.8-3.704z"
        fill="#FCFCFC"
      />
    </Svg>
  );
}

export default EventsIcon;
