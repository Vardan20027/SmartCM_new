import {deviceInfo} from './DeviceInfo';
const ratio = deviceInfo.deviceWidth / 375;

export const Sizes = {};
for (let i = 1; i < 800; i++) {
  Sizes[`size${i}`] = i * ratio;
}
export const Fonts = {
  thin: 'Montserrat-Thin',
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  bold: 'Montserrat-SemiBold',
  nunito: 'Nunito-SemiBold',
};
export const fullScreen = {
  width: deviceInfo.deviceWidth,
  height: deviceInfo.deviceHeight,
};
