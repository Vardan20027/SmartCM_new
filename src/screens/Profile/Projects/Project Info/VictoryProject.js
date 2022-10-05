import React from 'react';
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory-native';
import {Fonts, Sizes} from '../../../../assets/RootStyle';
import {View} from 'react-native';

function VictoryProject(props) {
  const data = [
    {x: 1.5, yo: 3.8, y: 3.8, k: 2.2, ko: 3.5},
    {x: 2.5, yo: 5.6, y: 5.3, k: 4.8, ko: 7.1},
    {x: 3.5, yo: 5.6, y: 4.5, k: 5.8, ko: 6.1},
    {x: 4.5, yo: 4.5, y: 3.8, k: 2.7, ko: 4.1},
    {x: 5.5, yo: 5.6, y: 4.3, k: 5.3, ko: 6.1},
    {x: 6.5, yo: 5.6, y: 6.3, k: 6.3, ko: 7.8},
  ];
  return (
    <>
      <View style={{marginLeft: Sizes.size12}}>
        <VictoryChart
          width={Sizes.si340}
          height={Sizes.size280}
          domain={({y: [1, 7]}, {x: [1, 7]})}
          domainPadding={{x: Sizes.size4}}>
          <VictoryAxis
            crossAxis
            style={{
              axis: {stroke: '#ECECEC'},
              grid: {stroke: '#ECECEC'},
              tickLabels: {
                fontFamily: Fonts.regular,
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: Sizes.size16,
                lineHeight: Sizes.size20,
                fill: '#B8C0CC',
              },
            }}
            tickValues={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
          />
          <VictoryAxis
            dependentAxis
            crossAxis
            style={{
              axis: {stroke: '#ECECEC'},
              grid: {stroke: '#ECECEC'},
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
          <VictoryBar
            data={data}
            animate
            x="x"
            y="y"
            style={{data: {fill: '#83B7AD', width: Sizes.size30}}}
            y0={d => d.yo - 1.8}
          />

          <VictoryBar
            data={data}
            animate
            x="x"
            y="k"
            style={{data: {width: Sizes.size30, fill: '#EE9087'}}}
            y0={d => d.ko - 1.8}
          />
        </VictoryChart>
      </View>
    </>
  );
}

export default VictoryProject;
