import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Styles} from './style';
import CheckBox from '@react-native-community/checkbox';
import CloseIcon from '../../../../assets/icons/closeIcon';

function ProjectBtSheet({
  project,
  setProject,
  data,
  setData,
  Project,
  setColor,
}) {
  const snapPoints = useMemo(() => ['60%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const handleChange = (item, key, name) => {
    setIsActive(item.id);
    setData({...data, [key]: name});
    if (item.id === 0) {
      setColor('#38A98E');
    } else if (item.id === 1) {
      setColor('#FF8A9F');
    } else if (item.id === 2) {
      setColor('#39B9CE');
    } else if (item.id === 3) {
      setColor('#ED8302');
    }
  };
  const [isActive, setIsActive] = useState(false);
  const styles = Styles();
  const DATA = [
    {
      id: 0,
      title: 'Bob AI',
    },
    {
      id: 1,
      title: 'New City',
    },
    {
      id: 2,
      title: 'Mapplo',
    },
    {
      id: 3,
      title: 'Broker ...',
    },
  ];
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={styles.view}
        onPress={() => handleChange(item, Project, item.title)}>
        <CheckBox value={isActive === item.id} />
        <Text style={styles.viewText}>{item.title}</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <GestureHandlerRootView style={styles.page}>
      <View style={styles.container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          enablePanDownToClose={true}
          onClose={() => {
            setProject(!project);
          }}
          onChange={handleSheetChanges}>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.close}
              onPress={() => {
                setProject(!project);
              }}>
              <CloseIcon />
            </TouchableOpacity>
            <Text style={styles.text1}>Select Project</Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => {
                setProject(!project);
              }}>
              <Text style={styles.text}>Select</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default ProjectBtSheet;
