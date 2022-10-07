import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import CheckBox from '@react-native-community/checkbox';
import CloseIcon from '../../../../assets/icons/closeIcon';
import Index from '../../../Participators';
function ParticipatorsBtSheet({
  participators,
  setParticipators,
  prts,
  data,
  setData,
}) {
  const [isActive, setIsActive] = useState(false);
  const snapPoints = useMemo(() => ['90%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

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
      title: 'Frontend team',
    },
    {
      id: 1,
      title: 'Backend team',
    },
    {
      id: 2,
      title: 'Mobile team',
    },
    {
      id: 3,
      title: 'Design team',
    },
    {
      id: 4,
      title: 'Managers',
    },
    {
      id: 5,
      title: 'Team Leads',
    },
  ];
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity style={view} onPress={() => setIsActive(item.id)}>
        <CheckBox value={isActive === item.id} />
        <Text style={viewText}>{item.title}</Text>
      </TouchableOpacity>
      {item.id === isActive ? (
        <Index setData={setData} data={data} prts={prts} />
      ) : null}
    </>
  );

  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          enablePanDownToClose={true}
          onClose={() => {
            setParticipators(!participators);
          }}
          index={0}
          onChange={handleSheetChanges}>
          <View style={content}>
            <TouchableOpacity
              style={close}
              onPress={() => setParticipators(!participators)}>
              <CloseIcon />
            </TouchableOpacity>
            <Text style={text1}>Participators</Text>

            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <TouchableOpacity
              style={touchable}
              onPress={() => {
                setParticipators(!participators);
              }}>
              <Text style={text}>Select</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default ParticipatorsBtSheet;
