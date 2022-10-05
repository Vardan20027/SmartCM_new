import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import CheckBox from '@react-native-community/checkbox';
import CloseIcon from '../../../../assets/icons/closeIcon';
import {Sizes} from '../../../../assets/RootStyle';
import VacationBtSheet from '../Vacation/VacationBtSheet';

function TypeBtSheet({
  type,
  setType,
  setItemData,
  setData,
  data,
  tesak,
  itemData,
}) {
  const [isActive, setIsActive] = useState(false);
  const [vacation, setVacation] = useState(false);
  const snapPoints = useMemo(() => ['60%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const handleType = (item, key, name) => {
    setIsActive(item.id);
    setItemData(item.id);
    setData({...data, [key]: name});
  };

  const {
    view,
    viewText,
    container,
    content,
    touchable,
    text,
    page,
    text1,
    close,
  } = styles();
  const DATA = [
    {
      id: 0,
      title: 'Hourly leave',
    },
    {
      id: 1,
      title: 'Day off',
    },
    {
      id: 2,
      title: 'Work remotely',
    },
    {
      id: 3,
      title: 'Vacation',
    },
  ];
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={view}
        onPress={() => handleType(item, tesak, item.title)}>
        <CheckBox
          value={isActive === item.id}
          onValueChange={() => handleType(item, tesak, item.title)}
        />
        <Text style={viewText}>{item.title}</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          onChange={handleSheetChanges}>
          <View style={content}>
            <TouchableOpacity style={close} onPress={() => setType(!type)}>
              <CloseIcon />
            </TouchableOpacity>
            <Text style={text1}>Choose event type</Text>

            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              style={{marginTop: Sizes.size36}}
            />
            <TouchableOpacity
              style={touchable}
              onPress={() => {
                if (itemData === 3) {
                  setVacation(!vacation);
                } else {
                  setType(!type);
                }
              }}>
              <Text style={text}>Select</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
      {vacation ? (
        <VacationBtSheet
          vacation={vacation}
          setVacation={setVacation}
          type={type}
          setType={setType}
          setData={setData}
          data={data}
        />
      ) : null}
    </GestureHandlerRootView>
  );
}

export default TypeBtSheet;
