import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={13}
      height={8}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M.872.596a.556.556 0 01.79-.077l.069.066L6.659 6.04 11.465.456a.556.556 0 01.79-.077l.07.066a.759.759 0 01.068.896l-.058.078-5.23 6.076a.556.556 0 01-.79.078l-.07-.066L.884 1.57A.756.756 0 01.872.596z"
        fill="#347474"
      />
    </Svg>
  );
}

export default SvgComponent;
