import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PassIcon(props) {
  return (
    <Svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.134 9.166H3.449c-.922 0-1.67.747-1.67 1.667v5.833c0 .921.748 1.667 1.67 1.667h11.685c.922 0 1.67-.746 1.67-1.666v-5.834c0-.92-.748-1.667-1.67-1.667zM5.12 9.166V5.833c0-1.105.439-2.165 1.221-2.946a4.177 4.177 0 015.902 0 4.163 4.163 0 011.223 2.946v3.333"
        stroke="#11493E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PassIcon;
