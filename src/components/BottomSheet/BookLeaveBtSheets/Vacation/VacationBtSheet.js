import React, {useCallback, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import CloseIcon from '../../../../assets/icons/closeIcon';
import {Fonts, Sizes} from '../../../../assets/RootStyle';
import moment from 'moment';
import {Input} from '../../../Input';
import CalendarDate from '../../../Home/Calendar/CalendarDate';
import GreatBtSheet from '../../Great/GreatBtSheet';

function VacationBtSheet({vacation, setVacation, type, setType}) {
  const [greate, setGreate] = useState(false);
  const [eday, setEday] = useState();
  const [sday, setSday] = useState();
  const start = moment(sday).format('DD');
  const end = moment(eday).format('DD');
  const year = moment(sday).format('YYYY');
  const month = moment(sday).format('MMM');

  const snapPoints = useMemo(() => ['90%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  const {
    page,
    container,
    container2,
    content,
    touchable,
    text,
    text1,
    text2,
    close,
    desc,
    input,
  } = styles();

  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          onChange={handleSheetChanges}>
          <View style={content}>
            <TouchableOpacity
              style={close}
              onPress={() => setVacation(!vacation)}>
              <CloseIcon />
            </TouchableOpacity>

            <Text style={text1}>Vacation</Text>
            <Text style={text2}>
              {month} {start} - {end}, {year}
            </Text>
            <View style={container2}>
              <CalendarDate setEday={setEday} setSday={setSday} />
              <View style={desc}>
                <Input
                  style={[input, {width: Sizes.size310}]}
                  placeholder="Description"
                />
              </View>
            </View>
            <TouchableOpacity
              style={touchable}
              onPress={() => setGreate(!greate)}>
              <Text style={text}>Book</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
      {greate ? (
        <GreatBtSheet
          greate={greate}
          setGreate={setGreate}
          type={type}
          setType={setType}
          vacation={vacation}
          setVacation={setVacation}
        />
      ) : null}
    </GestureHandlerRootView>
  );
}

export default VacationBtSheet;
