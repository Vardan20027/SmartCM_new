import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Styles} from './style';
import ArrowBottom from '../../assets/icons/arrowBottom';
import Calendar1Icon from '../../assets/icons/calendar1';
import {Input} from '../../components/Input';
import {Sizes} from '../../assets/RootStyle';
import LocatIcon from '../../assets/icons/locatIcon';
import DateBtSheet from '../../components/BottomSheet/Date/DateBtSheet';
import DurationBtSheet from '../../components/BottomSheet/Duration/DurationBtSheet';
import GreatBtSheet from '../../components/BottomSheet/Great/GreatBtSheet';
import TypeBtSheet from '../../components/BottomSheet/EventBtSheets/Type/TypeBtSheet';
import OrgBtSheet from '../../components/BottomSheet/EventBtSheets/Organizer/orgBtSheet';
import RoomBtSheet from '../../components/BottomSheet/EventBtSheets/Room/RoomBtSheet';
import ParticipatorsBtSheet from '../../components/BottomSheet/EventBtSheets/Participators/ParticipatorsBtSheet';
import moment from 'moment';
import dispatch from '../../hook/dispatch/dispatch';
import {CREATE_EVENT} from '../../store/actions/types/eventTypes';
import _ from 'lodash';

function CreateEvent(props) {
  const tesak = 'type';
  const org = 'organizer';
  const prts = 'participators';
  const senyak = 'room';
  const amsativ = 'date';
  const dur = 'duration';
  const [titleText, setTitleText] = useState('');
  console.log(titleText);
  const event = props.route.params.event;
  const [type, setType] = useState(false);
  const [organizer, setOrganizer] = useState(false);
  const [participators, setParticipators] = useState(false);
  const [room, setRoom] = useState(false);
  const [date, setDate] = useState(false);
  const [duration, setDuration] = useState(false);
  const [great, setGreat] = useState(false);
  const [data, setData] = useState({title: titleText});
  console.log(123, data);
  const styles = Styles();

  useEffect(() => {
    if (
      type ||
      organizer ||
      participators ||
      room ||
      date ||
      duration ||
      great
    ) {
      props.navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    }
    if (
      !type &&
      !organizer &&
      !participators &&
      !room &&
      !date &&
      !duration &&
      !great
    ) {
      props.navigation.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    }
    setData({...data, ['id']: _.uniqueId});
  }, [type, organizer, participators, room, date, duration, great]);
  useMemo(() => {
    setData({});
  }, [event]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={styles.text}>Create New Events</Text>
      <Text style={styles.subText}>Choose event type*</Text>

      <TouchableOpacity style={styles.inpView} onPress={() => setType(!type)}>
        <Text style={styles.input}>{data.type || 'Type'}</Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>

      <View style={styles.inpView}>
        <Input
          style={[styles.input, {width: Sizes.size310}]}
          {...props}
          defaultValue={titleText}
          onChange={newTitle => setTitleText(newTitle)}
          placeholder="Event Title*"
        />
      </View>
      <TouchableOpacity
        style={styles.inpView}
        onPress={() => setOrganizer(!organizer)}>
        <Text style={styles.input}>{data.organizer || 'Organizer'}</Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inpView}
        onPress={() => setParticipators(!participators)}>
        <Text style={styles.input}>
          {data.participators || 'Participators*'}
        </Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inpView} onPress={() => setRoom(!room)}>
        <Text style={styles.input}>{data.room || 'Room'}</Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inpView}>
        <Text style={styles.input}>1 Alek Manukyan, Gyumri</Text>
        <View style={styles.touch}>
          <LocatIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inpView}
        onPress={() => {
          setDate(!date);
        }}>
        <Text style={styles.input}>
          {moment(data.date).format('DD MMM YYYY') || 'Date'}
        </Text>
        <View style={styles.touch}>
          <Calendar1Icon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inpView}
        onPress={() => {
          setDuration(!duration);
        }}>
        <Text style={styles.input}>{data.duration || 'Duration'}</Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <View style={styles.desc}>
        <Input
          style={[styles.input, {width: Sizes.size310}]}
          {...props}
          placeholder="Description"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(CREATE_EVENT, data);
          console.log(456, data);
          setGreat(!great);
        }}>
        <Text style={styles.butText}>Create</Text>
      </TouchableOpacity>
      {type ? (
        <TypeBtSheet
          type={type}
          setType={setType}
          tesak={tesak}
          data={data}
          setData={setData}
        />
      ) : null}
      {organizer ? (
        <OrgBtSheet
          organizer={organizer}
          setOrganizer={setOrganizer}
          org={org}
          data={data}
          setData={setData}
        />
      ) : null}
      {room ? (
        <RoomBtSheet
          room={room}
          setRoom={setRoom}
          senyak={senyak}
          data={data}
          setData={setData}
        />
      ) : null}
      {date ? (
        <DateBtSheet
          date={date}
          setDate={setDate}
          amsativ={amsativ}
          data={data}
          setData={setData}
        />
      ) : null}
      {participators ? (
        <ParticipatorsBtSheet
          participators={participators}
          setParticipators={setParticipators}
          prts={prts}
          data={data}
          setData={setData}
        />
      ) : null}
      {duration ? (
        <DurationBtSheet
          duration={duration}
          setDuration={setDuration}
          dur={dur}
          data={data}
          setData={setData}
        />
      ) : null}
      {great ? (
        <GreatBtSheet
          great={great}
          setGreat={setGreat}
          data={data}
          setData={setData}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
}

export default CreateEvent;
