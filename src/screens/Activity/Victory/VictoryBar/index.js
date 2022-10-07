import React from 'react';
import {View} from 'react-native';
import {VictoryBar, VictoryAxis} from 'victory-native';
import {Sizes} from '../../../../assets/RootStyle';
import {Styles} from './style';

function Victory(props) {
  const styles = Styles();
  const data = [
    {quarter: 1, earnings: 840, day: 'M'},
    {quarter: 2, earnings: 690, day: 'M'},
    {quarter: 3, earnings: 570, day: 'M'},
    {quarter: 4, earnings: 690, day: 'M'},
    {quarter: 5, earnings: 850, day: 'M'},
    {quarter: 6, earnings: 540, day: 'M'},
    {quarter: 7, earnings: 330, day: 'M'},
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.bar_container}>
          <VictoryBar
            height={Sizes.size170}
            style={styles.bar}
            cornerRadius={{top: () => Sizes.size8, bottom: () => Sizes.size8}}
            data={data}
            x="quarter"
            y="earnings"
          />
        </View>
        <View style={styles.axis_container}>
          <VictoryAxis
            tickValues={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
            style={styles.axis}
          />
        </View>
      </View>
    </>
  );
}

export default Victory;
