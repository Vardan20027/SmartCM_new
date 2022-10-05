import React from 'react';
import {View} from 'react-native';
import {
  VictoryAxis,
  VictoryChart,
  VictoryStack,
  VictoryArea,
} from 'victory-native';
import {Fonts, Sizes} from '../../../assets/RootStyle';

function VictoryTask(props) {
  const data = [
    {quarter: 1, y: 2.5, k: -1},
    {quarter: 1.4, y: 3.6, k: -1},
    {quarter: 2, y: 1.6, k: 2.1},
    {quarter: 2.4, y: 2.6, k: -2},
    {quarter: 2.8, y: 1.3, k: 2.1},
    {quarter: 3, y: 2.4, k: 2},
    {quarter: 3.2, y: 2.4, k: 1.9},
    {quarter: 3.4, y: 1.1, k: 3.8},
    {quarter: 3.8, y: 1.8, k: 2},
    {quarter: 4, y: 2.8, k: 1.9},
    {quarter: 4.3, y: 2, k: 1},
    {quarter: 4.6, y: 3.2, k: 1},
    {quarter: 4.8, y: 3.4, k: 0.4},
    {quarter: 5, y: 3, k: 0.9},
    {quarter: 5.2, y: 2.8, k: 0},
    {quarter: 5.4, y: 2.6, k: 0},
    {quarter: 5.6, y: 2.5, k: 0},
    {quarter: 5.9, y: 1.1, k: 4.2},
    {quarter: 6.2, y: 2.2, k: 4.3},
    {quarter: 6.4, y: 2.2, k: 4.4},
    {quarter: 6.5, y: 1.9, k: 3.3},
    {quarter: 6.7, y: 2, k: 3},
    {quarter: 6.9, y: 2, k: 3.7},
    {quarter: 7.5, y: 1, k: 7},
  ];
  return (
    <>
      <View>
        <VictoryChart
          width={Sizes.si340}
          height={Sizes.size280}
          domain={{y: [1, 7]}}>
          <VictoryAxis
            crossAxis
            style={{
              axis: {stroke: '#334E68'},
              grid: {stroke: '#334E68'},
              tickLabels: {
                fontFamily: Fonts.regular,
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Sizes.size16,
                lineHeight: Sizes.size20,
                fill: '#B8C0CC',
              },
            }}
            tickValues={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ' ']}
          />
          <VictoryAxis
            dependentAxis
            crossAxis
            style={{
              axis: {stroke: '#334E68'},
              grid: {stroke: '#334E68'},
              tickLabels: {
                fontFamily: Fonts.regular,
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Sizes.size16,
                lineHeight: Sizes.size20,
                fill: '#B8C0CC',
              },
            }}
            tickValues={['0', '10', '20', '30', '40', '50', '60']}
          />
          <VictoryStack colorScale={['#EE9087', '#83B7AD']}>
            <VictoryArea
              style={{data: {stroke: '#D95353', strokeWidth: Sizes.size2}}}
              animate
              data={data}
              interpolation="natural"
              x="quarter"
              y="y"
            />
            <VictoryArea
              style={{data: {stroke: '#347474', strokeWidth: Sizes.size2}}}
              animate
              data={data}
              interpolation="natural"
              x="quarter"
              y="k"
            />
          </VictoryStack>
        </VictoryChart>
      </View>
    </>
  );
}

export default VictoryTask;
