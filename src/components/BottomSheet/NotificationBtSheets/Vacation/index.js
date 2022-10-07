import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Styles} from '../Styles/Style';
import CloseIcon from '../../../../assets/icons/closeIcon';
import {Sizes} from '../../../../assets/RootStyle';

function NotifVacationBtSheet({
  vacation,
  setVacation,
  func,
  vacationLead,
  leadActionID,
}) {
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
          index={vacationLead ? 1 : 0}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          onClose={() => {
            setVacation(!vacation);
          }}>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setVacation(!vacation)}>
              <CloseIcon />
            </TouchableOpacity>
            <Text style={styles.text1}>Vacation Request</Text>
            <View style={styles.employeeView}>
              <Text style={styles.employee}>Employee:</Text>
              <Text style={styles.name}>Name Surname</Text>
            </View>
            <View style={styles.employeeView}>
              <Text style={styles.employee}>From:</Text>
              <Text style={styles.name}>20 May 2022</Text>
            </View>
            <View style={styles.employeeView}>
              <Text style={[styles.employee, {marginRight: Sizes.size5}]}>
                To:
              </Text>
              <Text style={styles.name}>24 May 2022</Text>
            </View>
            <View style={styles.comView}>
              <Text style={styles.employee}>
                {vacationLead ? 'Description' : 'Comment:'}
              </Text>
              <Text style={styles.comment}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Text>
            </View>
            {vacationLead ? (
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
                      setVacation(!vacation);
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
                      setVacation(!vacation);
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

export default NotifVacationBtSheet;
