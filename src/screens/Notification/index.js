import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import {Fonts, Sizes} from '../../assets/RootStyle';
import Unread from '../../components/Notification/Unread';
import Read from '../../components/Notification/Read';
import DayOffBtSheet from '../../components/BottomSheet/NotificationBtSheets/Day off';
import HourlyBtSheet from '../../components/BottomSheet/NotificationBtSheets/Hourly';
import RemotelyBtSheet from '../../components/BottomSheet/NotificationBtSheets/Work remotely';
import NotifVacationBtSheet from '../../components/BottomSheet/NotificationBtSheets/Vacation';
import EmptyNotifIcon from '../../assets/icons/emptyNotifIcon';

const NotificationsDATA = [
  {
    id: 0,
    avatar: require('../../assets/images/notif_image.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'send',
    desc: 'request',
    date: 'May 20, 2022',
    time: '12:00',
    read: false,
    type: 'Hourly leave',
    role: 'Team-lead',
  },
  {
    id: 1,
    avatar: require('../../assets/images/notif_image1.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '15:00',
    read: false,
    type: 'Vacation',
  },
  {
    id: 2,
    avatar: require('../../assets/images/notif_image2.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'send',
    desc: 'request',
    date: 'May 20, 2022',
    time: '12:00',
    read: false,
    type: 'Day off',
    role: 'Team-lead',
  },
  {
    id: 3,
    avatar: require('../../assets/images/notif_image3.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'declined',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '15:00',
    read: false,
    type: 'Work remotely',
  },
  {
    id: 4,
    avatar: require('../../assets/images/notif_image4.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '12:00',
    read: false,
    type: 'Day off',
  },
  {
    id: 5,
    avatar: require('../../assets/images/notif_image5.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'send',
    desc: 'request',
    date: 'May 20, 2022',
    time: '15:00',
    read: false,
    type: 'Work remotely',
    role: 'Team-lead',
  },
  {
    id: 6,
    avatar: require('../../assets/images/notif_image6.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '12:00',
    read: true,
    type: 'Hourly leave',
  },
  {
    id: 7,
    avatar: require('../../assets/images/notif_image7.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '15:00',
    read: true,
    type: 'Day off',
  },
  {
    id: 8,
    avatar: require('../../assets/images/notif_image8.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'declined',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '12:00',
    read: true,
    type: 'Work remotely',
  },
  {
    id: 9,
    avatar: require('../../assets/images/notif_image9.png'),
    name: 'Name',
    surname: 'Surname',
    action: 'accepted',
    desc: 'your request',
    date: 'May 20, 2022',
    time: '15:00',
    read: true,
    type: 'Vacation',
  },
];
const NotificationsScreen = props => {
  const [arr, setArr] = useState(NotificationsDATA);
  const [leadAction, setLeadAction] = useState('');
  const [leadActionID, setLeadActionID] = useState();

  const func = el => {
    const newArr = NotificationsDATA.map(object => {
      if (object.id === el.leadActionID) {
        return {...object, action: el.leadAction};
      }
      return object;
    });
    setArr(newArr);
  };

  const [focused, setFocused] = useState(1);
  const [hourly, setHourly] = useState(false);
  const [hourlyLead, setHourlyLead] = useState();
  const [dayOff, setDayOff] = useState(false);
  const [dayOffLead, setDayOffLead] = useState();
  const [remotely, setRemotely] = useState(false);
  const [remotelyLead, setRemotelyLead] = useState();
  const [vacation, setVacation] = useState(false);
  const [vacationLead, setVacationLead] = useState();
  const [i, setI] = useState(false);

  const styles = Styles();
  const renderItem = ({item}) => {
    if (focused === 1 && !item.read) {
      return (
        <Unread
          item={item}
          func={func}
          hourly={hourly}
          hourlyLead={hourlyLead}
          setHourly={setHourly}
          setHourlyLead={setHourlyLead}
          vacation={vacation}
          vacationLead={vacationLead}
          setVacation={setVacation}
          setVacationLead={setVacationLead}
          remotely={remotely}
          remotelyLead={remotelyLead}
          setRemotely={setRemotely}
          setRemotelyLead={setRemotelyLead}
          dayOff={dayOff}
          leadActionID={leadActionID}
          leadAction={leadAction}
          setLeadActionID={setLeadActionID}
          dayOffLead={dayOffLead}
          setDayOff={setDayOff}
          setDayOffLead={setDayOffLead}
        />
      );
    } else if (focused === 2 && item.read) {
      return (
        <Read
          item={item}
          leadAction={leadAction}
          hourly={hourly}
          hourlyLead={hourlyLead}
          leadActionID={leadActionID}
          setLeadActionID={setLeadActionID}
          setHourly={setHourly}
          setHourlyLead={setHourlyLead}
          vacation={vacation}
          vacationLead={vacationLead}
          setVacation={setVacation}
          setVacationLead={setVacationLead}
          remotely={remotely}
          remotelyLead={remotelyLead}
          setRemotely={setRemotely}
          setRemotelyLead={setRemotelyLead}
          dayOff={dayOff}
          dayOffLead={dayOffLead}
          setDayOff={setDayOff}
          setDayOffLead={setDayOffLead}
        />
      );
    }
  };

  const handleReadAll = () => {
    arr.map(item => {
      item.read = true;
      setI(true);
    });
  };
  useEffect(() => {
    if (dayOff || hourly || remotely || vacation) {
      props.navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    }
    if (!dayOff && !hourly && !remotely && !vacation) {
      props.navigation.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    }
  }, [dayOff, hourly, props.navigation, remotely, vacation]);

  const ListEmptyView = ({item}) => {
    return (
      <View>
        <View style={{margin: Sizes.size10}}>
          <EmptyNotifIcon />
        </View>
        <Text>No notifications</Text>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Notifications</Text>
        <View
          style={
            focused === 2
              ? [styles.select_container, {marginBottom: Sizes.size10}]
              : styles.select_container
          }>
          <View style={styles.select_press_container}>
            <Pressable
              onPress={() => setFocused(1)}
              style={
                focused === 1
                  ? styles.select_press_active
                  : styles.select_press_passive
              }>
              <Text
                style={
                  focused === 1
                    ? styles.press_text_active
                    : styles.press_text_passive
                }>
                Unread
              </Text>
            </Pressable>
          </View>
          <View style={styles.select_press_container}>
            <Pressable
              onPress={() => setFocused(2)}
              style={
                focused === 2
                  ? styles.select_press_active
                  : styles.select_press_passive
              }>
              <Text
                style={
                  focused === 2
                    ? styles.press_text_active
                    : styles.press_text_passive
                }>
                Read
              </Text>
            </Pressable>
          </View>
        </View>

        {focused === 1 ? (
          <TouchableOpacity
            style={styles.mark_all_press}
            onPress={() => handleReadAll()}>
            <Text style={styles.mark_text}>Mark all as read</Text>
          </TouchableOpacity>
        ) : null}
        {i && focused === 1 ? (
          <View>
            <View style={styles.empty_container}>
              <EmptyNotifIcon />
            </View>
            <Text style={styles.empty_text}>No notifications</Text>
          </View>
        ) : null}
        <FlatList
          data={arr}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.bottomSheet}>
        {dayOff ? (
          <DayOffBtSheet
            func={func}
            leadActionID={leadActionID}
            setDayOff={setDayOff}
            dayOff={dayOff}
            dayOffLead={dayOffLead}
            setLeadAction={setLeadAction}
          />
        ) : null}
        {hourly ? (
          <HourlyBtSheet
            func={func}
            leadActionID={leadActionID}
            setHourly={setHourly}
            hourly={hourly}
            hourlyLead={hourlyLead}
            setLeadAction={setLeadAction}
          />
        ) : null}
        {remotely ? (
          <RemotelyBtSheet
            func={func}
            leadActionID={leadActionID}
            setRemotely={setRemotely}
            remotely={remotely}
            setLeadAction={setLeadAction}
            remotelyLead={remotelyLead}
          />
        ) : null}
        {vacation ? (
          <NotifVacationBtSheet
            func={func}
            leadActionID={leadActionID}
            setVacation={setVacation}
            vacation={vacation}
            vacationLead={vacationLead}
            setLeadAction={setLeadAction}
          />
        ) : null}
      </View>
    </>
  );
};

export default NotificationsScreen;
