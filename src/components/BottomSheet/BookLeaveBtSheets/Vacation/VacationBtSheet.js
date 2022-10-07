import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Styles} from './style';
import CloseIcon from '../../../../assets/icons/closeIcon';
import {Sizes} from '../../../../assets/RootStyle';
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

  const snapPoints = useMemo(() => ['100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const onSubmit = () => {
    setEday();
    setSday();
  };
  const styles = Styles();

  return (
    <GestureHandlerRootView style={styles.page}>
      <View style={styles.container}>
        <BottomSheet
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => {
            setVacation(!vacation);
          }}
          ref={sheetRef}
          index={0}
          onChange={handleSheetChanges}>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setVacation(!vacation)}>
              <CloseIcon />
            </TouchableOpacity>

            <Text style={styles.text1}>Vacation</Text>
            <Text style={styles.text2}>
              {month} {start} - {end}, {year}
            </Text>
            <View style={styles.container2}>
              <CalendarDate setEday={setEday} setSday={setSday} />
              <View style={styles.desc}>
                <Input
                  style={[styles.input, {width: Sizes.size310}]}
                  placeholder="Description"
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => setGreate(!greate)}>
              <Text style={styles.text}>Book</Text>
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
          onSubmit={onSubmit}
        />
      ) : null}
    </GestureHandlerRootView>
  );
}

export default VacationBtSheet;
