import React from 'react';
import {View} from 'react-native';
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
} from 'victory-native';
import {Fonts, Sizes} from '../../../../assets/RootStyle';
import {Styles} from './style';

function VictoryProgress(props) {
  const styles = Styles();
  const data = [
    {x: 1, y: 26.5},
    {x: 1.3, y: 26.45},
    {x: 1.5, y: 26.7},
    {x: 1.58, y: 26.75},
    {x: 2.1, y: 27},
    {x: 3, y: 27.8},
    {x: 3.48, y: 26.9},
    {x: 3.69, y: 26.73},
    {x: 4.3, y: 26.2},
    {x: 4.7, y: 26.42},
    {x: 4.78, y: 26.46},
    {x: 5, y: 26.45},
    {x: 5.5, y: 26.7},
    {x: 6, y: 26.1},
    {x: 7, y: 27},
  ];
  return (
    <>
      <View style={styles.container}>
        <VictoryChart minDomain={{x: 0.8, y: 0}} domain={{y: [25, 29]}}>
          <VictoryAxis
            crossAxis
            style={styles.months_axis}
            tickValues={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          />
          <VictoryAxis
            dependentAxis
            crossAxis
            style={styles.axis}
            tickFormat={y => `${y}`.substring(0, 2)}
          />
          <VictoryLine
            data={data}
            style={styles.line}
            interpolation="cardinal"
          />

          <VictoryScatter
            style={styles.scatter}
            size={Sizes.size8}
            data={[{x: 3, y: 27.8}]}
          />
        </VictoryChart>
      </View>
    </>
  );
}

export default VictoryProgress;
