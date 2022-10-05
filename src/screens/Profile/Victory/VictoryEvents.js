import React from 'react';
import {View} from 'react-native';
import {VictoryLabel, VictoryPie} from 'victory-native';
import Svg from 'react-native-svg';
import {Fonts, Sizes} from '../../../assets/RootStyle';

function VictoryEvents(props) {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          height: Sizes.size380,
          width: Sizes.size380,
          left: Sizes.size10,
          top: Sizes.size10,
        }}>
        <Svg viewBox="0 0 600 600">
          <VictoryPie
            padding={Sizes.size125}
            startAngle={Sizes.size30}
            endAngle={Sizes.size450}
            standalone={false}
            data={[
              {x: 'History', y: Sizes.size20},
              {x: 'Teambulding', y: Sizes.size80},
            ]}
            cornerRadius={Sizes.size10}
            innerRadius={Sizes.size45}
            labels={() => null}
            colorScale={['#F7F8F9', '#EF988F']}
          />

          <VictoryPie
            padding={Sizes.size110}
            standalone={false}
            startAngle={Sizes.size30}
            endAngle={Sizes.size450}
            data={[
              {x: 'History', y: Sizes.size30},
              {x: 'Meeting', y: Sizes.size70},
            ]}
            cornerRadius={Sizes.size10}
            innerRadius={Sizes.size95}
            labels={() => null}
            colorScale={['#F7F8F9', '#F4C584']}
          />
          <VictoryPie
            standalone={false}
            data={[
              {x: 'History', y: Sizes.size60},
              {x: 'Trainings', y: Sizes.size40},
            ]}
            padding={Sizes.size60}
            startAngle={Sizes.size30}
            endAngle={Sizes.size450}
            cornerRadius={Sizes.size10}
            innerRadius={Sizes.size110}
            labels={() => null}
            colorScale={['#F7F8F9', '#92BEFA']}
          />
          <VictoryPie
            standalone={false}
            padding={Sizes.size40}
            startAngle={Sizes.size30}
            endAngle={Sizes.size450}
            data={[
              {x: 'History', y: Sizes.size70},
              {x: 'Events', y: Sizes.size30},
            ]}
            cornerRadius={Sizes.size10}
            innerRadius={Sizes.size165}
            labels={() => null}
            colorScale={['#F5F5F5', '#19B3A6']}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{fontSize: Sizes.size20, fontFamily: Fonts.regular}}
            x={Sizes.size190}
            y={Sizes.size190}
            text="Item"
          />
        </Svg>
      </View>
    </>
  );
}

export default VictoryEvents;
