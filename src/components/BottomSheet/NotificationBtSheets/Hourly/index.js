import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Styles} from '../Styles/Style';
import CloseIcon from '../../../../assets/icons/closeIcon';

function HourlyBtSheet({hourly, setHourly, hourlyLead, func, leadActionID}) {
  const snapPoints = useMemo(() => ['45%', '60%', '70%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const styles = Styles();

  return (
    <GestureHandlerRootView style={styles.page}>
      <View style={styles.container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={hourlyLead ? 1 : 0}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          onClose={() => {
            setHourly(!hourly);
          }}>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setHourly(!hourly)}>
              <CloseIcon />
            </TouchableOpacity>

            <Text style={styles.text1}>Hourly Leave Request</Text>
            <View style={styles.employeeView}>
              <Text style={styles.employee}>Employee:</Text>
              <Text style={styles.name}>Name Surname</Text>
            </View>
            <View style={styles.employeeView}>
              <Text style={styles.employee}>Date:</Text>
              <Text style={styles.name}>20 May 2022</Text>
            </View>
            <View style={styles.employeeView}>
              <Text style={styles.employee}>Time:</Text>
              <Text style={styles.name}>13:00 - 16:00</Text>
            </View>
            <View style={styles.comView}>
              <Text style={styles.employee}>
                {hourlyLead ? 'Description:' : 'Comment:'}
              </Text>
              <Text style={styles.comment}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Text>
            </View>
            {hourlyLead !== null ? (
              <View>
                <TextInput
                  style={styles.leadInput}
                  placeholder={'Add comment'}
                />
                <View style={styles.leadActions}>
                  <TouchableOpacity
                    style={styles.leadAccept}
                    onPress={() => {
                      func({
                        leadActionID: leadActionID,
                        leadAction: 'accepted',
                      });
                      setHourly(!hourly);
                    }}>
                    <Text style={styles.leadText}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.leadDecline}
                    onPress={() => {
                      func({
                        leadActionID: leadActionID,
                        leadAction: 'declined',
                      });
                      setHourly(!hourly);
                    }}>
                    <Text style={styles.leadText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default HourlyBtSheet;
