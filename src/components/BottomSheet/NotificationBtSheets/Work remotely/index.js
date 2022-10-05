import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../Styles/Style';
import CloseIcon from '../../../../assets/icons/closeIcon';

function RemotelyBtSheet({
  remotely,
  setRemotely,
  remotelyLead,
  func,
  leadActionID,
}) {
  const snapPoints = useMemo(() => ['45%', '60%', '70%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const {
    container,
    content,
    page,
    text1,
    close,
    employeeView,
    employee,
    comView,
    comment,
    name,
    leadInput,
    leadActions,
    leadAccept,
    leadDecline,
    leadText,
  } = styles();
  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={remotelyLead ? 1 : 0}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          onClose={() => {
            setRemotely(!remotely);
          }}>
          <View style={content}>
            <TouchableOpacity
              style={close}
              onPress={() => setRemotely(!remotely)}>
              <CloseIcon />
            </TouchableOpacity>
            <Text style={text1}>Work Remotely Request</Text>
            <View style={employeeView}>
              <Text style={employee}>Employee:</Text>
              <Text style={name}>Name Surname</Text>
            </View>
            <View style={employeeView}>
              <Text style={employee}>Date:</Text>
              <Text style={name}>20 May 2022</Text>
            </View>
            <View style={employeeView}>
              <Text style={employee}>Time:</Text>
              <Text style={name}>13:00 - 16:00</Text>
            </View>
            <View style={comView}>
              <Text style={employee}>
                {remotelyLead ? 'Description:' : 'Comment:'}
              </Text>
              <Text style={comment}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </Text>
            </View>
            {remotelyLead ? (
              <View>
                <TextInput style={leadInput} placeholder={'Add comment'} />
                <View style={leadActions}>
                  <TouchableOpacity
                    style={leadAccept}
                    onPress={() => {
                      func({
                        leadActionID: leadActionID,
                        leadAction: 'accepted',
                      });
                      setRemotely(!remotely);
                    }}>
                    <Text style={leadText}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={leadDecline}
                    onPress={() => {
                      func({
                        leadActionID: leadActionID,
                        leadAction: 'declined',
                      });
                      setRemotely(!remotely);
                    }}>
                    <Text style={leadText}>Cancel</Text>
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

export default RemotelyBtSheet;
