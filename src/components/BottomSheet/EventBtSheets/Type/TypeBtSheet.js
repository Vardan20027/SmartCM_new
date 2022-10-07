import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import CheckBox from '@react-native-community/checkbox';
import CloseIcon from '../../../../assets/icons/closeIcon';
import {Sizes} from '../../../../assets/RootStyle';

function TypeBtSheet({type, setType, Type, data, setData, setColor}) {
  const [isActive, setIsActive] = useState(false);
  const snapPoints = useMemo(() => ['60%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const handleType = (item, key, name) => {
    setIsActive(item.id);
    setData({...data, [key]: name});
    if (item.id === 0) {
      setColor('#F4C584');
    } else if (item.id === 1) {
      setColor('#EF988F');
    } else if (item.id === 2) {
      setColor('#92BEFA');
    } else if (item.id === 3) {
      setColor('#19B3A6');
    }
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
      title: 'Meeting',
    },
    {
      id: 1,
      title: 'Teambuilding',
    },
    {
      id: 2,
      title: 'Trainings',
    },
    {
      id: 3,
      title: 'Events',
    },
  ];
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={view}
        onPress={() => handleType(item, Type, item.title)}>
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
            setType(!type);
          }}
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
                setType(!type);
              }}>
              <Text style={text}>Select</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default TypeBtSheet;
