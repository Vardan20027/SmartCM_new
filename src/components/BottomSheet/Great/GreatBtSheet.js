import React, {useCallback, useMemo, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import GreatIcon from '../../../assets/icons/greatIcon';
import CloseIcon from '../../../assets/icons/closeIcon';
import * as RootNavigation from '../../../navigation/RootNavigation';
import {Sizes} from '../../../assets/RootStyle';
import {styles} from './style';

function GreatBtSheet({
  great,
  setGreat,
  greate,
  setGreate,
  vacation,
  setVacation,
  hourly,
  setHourly,
  refresh,
  setRefresh,
  type,
  setType,
}) {
  const {page, container, content, text, close, text1} = styles();
  const snapPoints = useMemo(() => ['45%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          onChange={handleSheetChanges}>
          <TouchableOpacity
            style={close}
            onPress={() => {
              great && setGreat(!great);
              greate && setGreate(!greate);
              vacation && setVacation(!vacation);
              hourly && setHourly(!hourly);
              refresh && setRefresh(false);
              type && setType(!type);
              RootNavigation.navigate('Home');
            }}>
            <CloseIcon />
          </TouchableOpacity>
          <View style={content}>
            <GreatIcon />
            <Text style={text}>Great !</Text>
            <Text style={text1}>
              {great
                ? 'Event successfully created.'
                : 'Time successfully booked.'}
            </Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default GreatBtSheet;
