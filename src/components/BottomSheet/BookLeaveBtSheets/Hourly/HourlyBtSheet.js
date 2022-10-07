import React, {useCallback, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Styles} from './style';
import CloseIcon from '../../../../assets/icons/closeIcon';
import {Sizes} from '../../../../assets/RootStyle';
import CalendarIconWhite from '../../../../assets/icons/calendarIconWhite';
import ArrowBottom2 from '../../../../assets/icons/arrowBottom2';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {Input} from '../../../Input';
import GreatBtSheet from '../../Great/GreatBtSheet';

function HourlyBtSheet({
  hourly,
  setHourly,
  currentDate,
  or,
  data,
  setData,
  Duration,
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [greate, setGreate] = useState(false);
  const vremya = moment(date).format('HH:mm');
  const day = moment(or).format('DD');
  const dayDefault = moment(currentDate).format('DD');
  const month = moment(or).format('MMM');
  const monthDefault = moment(currentDate).format('MMM');
  const snapPoints = useMemo(() => ['70%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const handleHourly = (item, key, name) => {
    setData({...data, [key]: name});
  };
  const styles = Styles();
  const DATA = [
    {
      id: 0,
      title: '15 minutes',
    },
    {
      id: 1,
      title: '30 minutes',
    },
    {
      id: 2,
      title: '1 hour',
    },
    {
      id: 3,
      title: '2 hours',
    },
    {
      id: 4,
      title: '3 hours',
    },
    {
      id: 5,
      title: 'Half day',
    },
  ];
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={styles.time}
        onPress={() => handleHourly(item, Duration, item.title)}>
        <Text style={styles.textFlat}>{item.title}</Text>
      </TouchableOpacity>
    </>
  );
  return (
    <GestureHandlerRootView style={styles.page}>
      <View style={styles.container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          enablePanDownToClose={true}
          onClose={() => {
            setHourly(!hourly);
          }}
          index={0}
          onChange={handleSheetChanges}>
          <View style={styles.content}>
            <TouchableOpacity style={close} onPress={() => setHourly(!hourly)}>
              <CloseIcon />
            </TouchableOpacity>

            <Text style={styles.text1}>Hourly leave</Text>
            <Text style={styles.text2}>
              {month || monthDefault} {day || dayDefault}
            </Text>
            <View style={styles.container2}>
              <TouchableOpacity
                style={styles.timeTouch}
                onPress={() => setOpen(true)}>
                <CalendarIconWhite
                  iconWidth={Sizes.size17}
                  iconHeight={Sizes.size19}
                  iconColor={'#FCFCFC'}
                />

                <Text style={styles.jam}>{vremya}</Text>
                <ArrowBottom2
                  iconWidth={Sizes.size11}
                  iconHeight={Sizes.size7}
                  iconColor={'#F7F7F7'}
                />
              </TouchableOpacity>

              <View style={styles.flat}>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  numColumns={2}
                />
              </View>
              <View style={styles.desc}>
                <Input
                  style={[styles.input, {width: Sizes.size288}]}
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
          <DatePicker
            modal
            open={open}
            mode={'time'}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </BottomSheet>
      </View>
      {greate ? (
        <GreatBtSheet
          greate={greate}
          setGreate={setGreate}
          hourly={hourly}
          setHourly={setHourly}
        />
      ) : null}
    </GestureHandlerRootView>
  );
}

export default HourlyBtSheet;
