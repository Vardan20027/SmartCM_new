import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import CheckBox from '@react-native-community/checkbox';
import CloseIcon from '../../../../assets/icons/closeIcon';
import {Sizes} from '../../../../assets/RootStyle';

function OrgBtSheet({organizer, setOrganizer, org, data, setData}) {
  const [isActive, setIsActive] = useState(false);
  const snapPoints = useMemo(() => ['90%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const handleOrganizer = (item, key, name) => {
    setIsActive(item.id);
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
      title: 'Name Surname',
    },
    {
      id: 1,
      title: 'Name Surname',
    },
    {
      id: 2,
      title: 'Name Surname',
    },
    {
      id: 3,
      title: 'Name Surname',
    },
    {
      id: 4,
      title: 'Name Surname',
    },
    {
      id: 5,
      title: 'Name Surname',
    },
    {
      id: 6,
      title: 'Name Surname',
    },
    {
      id: 7,
      title: 'Name Surname',
    },
    {
      id: 8,
      title: 'Name Surname',
    },
    {
      id: 9,
      title: 'Name Surname',
    },
    {
      id: 10,
      title: 'Name Surname',
    },
  ];
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={view}
        onPress={() => handleOrganizer(item, org, item.title)}>
        <CheckBox value={isActive === item.id} />
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
            <TouchableOpacity
              style={close}
              onPress={() => setOrganizer(!organizer)}>
              <CloseIcon />
            </TouchableOpacity>
            <Text style={text1}>Organizer</Text>

            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <TouchableOpacity
              style={touchable}
              onPress={() => {
                setOrganizer(!organizer);
              }}>
              <Text style={text}>Select</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default OrgBtSheet;
