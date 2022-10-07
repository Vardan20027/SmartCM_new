import React from 'react';
import {Text, View} from 'react-native';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
} from 'victory-native';
import UnreadIcon from '../../../../assets/icons/unreadIcon';
import {Sizes} from '../../../../assets/RootStyle';
import {Styles} from './style';

function VictoryLeave(props) {
  const styles = Styles();
  const data = [
    {quarter: 1, earnings: 20, y: 7, z: 4, k: 1.4},
    {quarter: 2, earnings: 20, y: 9, z: 1.4, k: 4},
    {quarter: 3, earnings: 20, y: 9, z: 1.4, k: 4},
    {quarter: 4, earnings: 20, y: 11, z: 4, k: 0.001},
    {quarter: 5, earnings: 20, y: 9, z: 1.4, k: 4},
    {quarter: 6, earnings: 20, y: 11, z: 4, k: 0.001},
    {quarter: 7, earnings: 20, y: 7, z: 4, k: 1.4},
    {quarter: 8, earnings: 20, y: 2, z: 5, k: 11},
    {quarter: 9, earnings: 20, y: 7, z: 4, k: 1.4},
    {quarter: 10, earnings: 20, y: 7, z: 4, k: 1.4},
    {quarter: 11, earnings: 20, y: 2, z: 5, k: 11},
    {quarter: 12, earnings: 20, y: 2, z: 5, k: 11},
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.chart_container}>
          <VictoryChart
            width={Sizes.size350}
            height={Sizes.size280}
            domain={{y: [0, 29]}}>
            <VictoryAxis
              crossAxis
              style={styles.months_axis}
              tickValues={[
                'J',
                'F',
                'M',
                'A ',
                'M ',
                'J ',
                'J  ',
                'A  ',
                'S',
                'O',
                'N',
                'D',
              ]}
            />
            <VictoryBar
              style={styles.bar}
              cornerRadius={{top: () => Sizes.size3, bottom: () => Sizes.size3}}
              data={data}
              x="quarter"
              y="earnings"
            />
            <VictoryStack colorScale={['#EF988F', '#92BEFA', '#83B7AD']}>
              <VictoryBar
                data={data}
                x="quarter"
                y="y"
                style={{data: {width: Sizes.size7}}}
                cornerRadius={{
                  top: () => Sizes.size4,
                  bottom: () => Sizes.size4,
                }}
              />
              <VictoryBar
                data={data}
                style={{data: {width: Sizes.size7}}}
                x="quarter"
                y="z"
                cornerRadius={{
                  top: () => Sizes.size4,
                  bottom: () => Sizes.size4,
                }}
              />
              <VictoryBar
                data={data}
                x="quarter"
                y="k"
                style={{data: {width: Sizes.size7}}}
                cornerRadius={{
                  top: () => Sizes.size4,
                  bottom: () => Sizes.size4,
                }}
              />
            </VictoryStack>
          </VictoryChart>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#92BEFA'}
            iconWidth={Sizes.size10}
            iconHeight={Sizes.size10}
          />
          <Text style={styles.title}>Vacation</Text>
          <Text style={styles.duration}>12 day</Text>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#EF988F'}
            iconWidth={Sizes.size10}
            iconHeight={Sizes.size10}
          />
          <Text style={styles.title}>Day Offs</Text>
          <Text style={styles.duration}>3 day</Text>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#83B7AD'}
            iconWidth={Sizes.size10}
            iconHeight={Sizes.size10}
          />
          <Text style={styles.title}>Hourly leaved</Text>
          <Text style={styles.duration}>1 h 15 m</Text>
        </View>
        <View style={styles.icon}>
          <UnreadIcon
            iconColor={'#F5CC93'}
            iconWidth={Sizes.size10}
            iconHeight={Sizes.size10}
          />
          <Text style={styles.title}>Work remotely</Text>
          <Text style={styles.duration}>5 day</Text>
        </View>
      </View>
    </>
  );
}

export default VictoryLeave;
