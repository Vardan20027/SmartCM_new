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
  const Type = 'type';
  const org = 'organizer';
  const prts = 'participators';
  const Room = 'room';
  const Date = 'date';
  const dur = 'duration';
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const event = props.route.params.event;
  const [type, setType] = useState(false);
  const [organizer, setOrganizer] = useState(false);
  const [participators, setParticipators] = useState(false);
  const [room, setRoom] = useState(false);
  const [date, setDate] = useState(false);
  const [duration, setDuration] = useState(false);
  const [great, setGreat] = useState(false);
  const [color, setColor] = useState('');
  const [data, setData] = useState({});
  data.color = color;
  data.title = title;
  data.short_description = desc;
  const styles = Styles();
  const onSubmit = () => {
    setTitle('');
    setDesc('');
    setColor();
    setData({});
  };
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
        <Text style={data.type ? styles.input : styles.input_default}>
          {data.type || 'Type'}
        </Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>

      <View style={styles.inpView}>
        <Input
          style={[styles.input, {width: Sizes.size310}]}
          {...props}
          value={title}
          onChangeText={setTitle}
          placeholder="Event Title*"
        />
      </View>
      <TouchableOpacity
        style={styles.inpView}
        onPress={() => setOrganizer(!organizer)}>
        <Text style={data.organizer ? styles.input : styles.input_default}>
          {data.organizer || 'Organizer'}
        </Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inpView}
        onPress={() => setParticipators(!participators)}>
        <Text style={data.participators ? styles.input : styles.input_default}>
          {data.participators || 'Participators*'}
        </Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inpView} onPress={() => setRoom(!room)}>
        <Text style={data.room ? styles.input : styles.input_default}>
          {data.room || 'Room'}
        </Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inpView}>
        <Text style={styles.input_default}>1 Alek Manukyan, Gyumri</Text>
        <View style={styles.touch}>
          <LocatIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inpView}
        onPress={() => {
          setDate(!date);
        }}>
        <Text style={data.date ? styles.input : styles.input_default}>
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
        <Text style={data.duration ? styles.input : styles.input_default}>
          {data.duration || 'Duration'}
        </Text>
        <View style={styles.touch}>
          <ArrowBottom />
        </View>
      </TouchableOpacity>
      <View style={styles.desc}>
        <Input
          style={[styles.input, {width: Sizes.size310}]}
          {...props}
          maxLength={90}
          value={desc}
          onChangeText={setDesc}
          placeholder="Description"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(CREATE_EVENT, data);
          setGreat(!great);
        }}>
        <Text style={styles.butText}>Create</Text>
      </TouchableOpacity>
      {type ? (
        <TypeBtSheet
          type={type}
          setType={setType}
          Type={Type}
          data={data}
          setData={setData}
          setColor={setColor}
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
          Room={Room}
          data={data}
          setData={setData}
        />
      ) : null}
      {date ? (
        <DateBtSheet
          date={date}
          setDate={setDate}
          Date={Date}
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
          onSubmit={onSubmit}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
}

export default CreateEvent;
