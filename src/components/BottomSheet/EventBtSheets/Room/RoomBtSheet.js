import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import CheckBox from '@react-native-community/checkbox';
import CloseIcon from '../../../../assets/icons/closeIcon';
import {Sizes} from '../../../../assets/RootStyle';

function RoomBtSheet({setRoom, room, Room, data, setData}) {
  const [isActive, setIsActive] = useState(false);
  const snapPoints = useMemo(() => ['50%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const handleRoom = (item, key, name) => {
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
      title: 'Meeting rooms',
    },
    {
      id: 1,
      title: 'Meeting room1',
    },
  ];
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={view}
        onPress={() => handleRoom(item, Room, item.title)}>
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
          enablePanDownToClose={true}
          onClose={() => {
            setRoom(!room);
          }}
          onChange={handleSheetChanges}>
          <View style={content}>
            <TouchableOpacity style={close} onPress={() => setRoom(!room)}>
              <CloseIcon />
            </TouchableOpacity>
            <Text style={text1}>Choose Room</Text>

            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              style={{marginTop: Sizes.size36}}
            />
            <TouchableOpacity
              style={touchable}
              onPress={() => {
                setRoom(!room);
              }}>
              <Text style={text}>Select</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default RoomBtSheet;
