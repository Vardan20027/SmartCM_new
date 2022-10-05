import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function PlaneIcon(props) {
  return (
    <Svg
      width={Sizes.size25}
      height={Sizes.size25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_589_6479)" stroke={'#FCFCFC'}>
        <Path d="M22.288 18.23h0a.283.283 0 01-.069.292h0l-2.217 2.218a.284.284 0 01-.434-.04h0l-3.31-4.78 3.912-3.913 2.117 6.223zM4.117 5.25h0a.284.284 0 01-.04-.434s0 0 0 0l2.218-2.217s0 0 0 0a.286.286 0 01.293-.068s0 0 0 0l6.222 2.117L8.898 8.56 4.117 5.25zM8.294 12.48l.262.053.19-.19L19.243 1.847a2.634 2.634 0 013.728 0 2.634 2.634 0 010 3.728s0 0 0 0L12.473 16.072l-.189.189.053.262.472 2.36v.001a.284.284 0 01-.078.256l-2.217 2.217-.001.001a.284.284 0 01-.454-.074s0 0 0 0l-2.1-4.201-.075-.15-.15-.074-4.2-2.1s0 0 0 0a.285.285 0 01-.074-.455h0l2.217-2.218s0 0 0 0a.287.287 0 01.258-.077l2.359.471z" />
        <Path
          d="M1.406 21.815h0l3.136-3.136s0 0 0 0a.534.534 0 000-.755l-3.136 3.891zm0 0a.534.534 0 11-.755-.755l3.136-3.136a.534.534 0 01.755 0l-3.136 3.891zM6.893 20.276h0a.534.534 0 010 .755l-3.136 3.136h0a.534.534 0 11-.755-.755l3.136-3.136a.534.534 0 01.755 0z"
          strokeWidth={0.5}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_589_6479">
          <Path
            fill={'#FCFCFC'}
            transform="translate(.244 .573)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PlaneIcon;
