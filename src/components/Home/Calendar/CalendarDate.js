import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Calendar} from 'react-native-calendars';

import moment from 'moment';
import ArrowLeft from '../../../assets/icons/arrowLeft';
import {Sizes} from '../../../assets/RootStyle';
import ArrowRight from '../../../assets/icons/arrowRight';
import {Styles} from './style';

function CalendarDate({setSday, setEday}) {
  const currentDate = moment().format('MMM DD YYYY');
  const [calendar, setCalendar] = useState(false);
  const [startDay, setStartDay] = useState(
    new Date().toISOString().slice(0, 10),
  );
  const [endDay, setEndDay] = useState(new Date().toISOString().slice(0, 10));
  const [selectDays, setSelectDays] = useState({});
  const styles = Styles();
  const handlerCalendar = day => {
    if (day > new Date(endDay).getTime()) {
      setEndDay(new Date(day).toISOString().slice(0, 10));
    } else if (
      day < new Date(endDay).getTime() &&
      day > new Date(startDay).getTime()
    ) {
      const tempEnd = (new Date(endDay).getTime() - day) / 86400000;
      const tempStart = (day - new Date(startDay).getTime()) / 86400000;
      if (tempEnd > tempStart) {
        setStartDay(new Date(day).toISOString().slice(0, 10));
      } else {
        setEndDay(new Date(day).toISOString().slice(0, 10));
      }
    } else {
      setStartDay(new Date(day).toISOString().slice(0, 10));
    }
  };

  useEffect(() => {
    const start = new Date(startDay).getTime();
    const end = new Date(endDay).getTime();
    const days = (end - start) / 86400000;
    let temp = {};
    for (let i = 1; i < days + 1; i++) {
      const newDate = new Date(start + i * 86400000).toISOString().slice(0, 10);
      temp[newDate] = {color: '#D4E9E9', textColor: 'black'};
    }
    setEday(endDay);
    setSday(startDay);
    setSelectDays(temp);
  }, [startDay, endDay]);

  return (
    <>
      <FlatList
        startDay={startDay}
        setStartDay={setStartDay}
        endDay={endDay}
        setEndDay={setEndDay}
        selectDays={selectDays}
        setSelectDays={setSelectDays}
        calendar={calendar}
        keyExtractor={item => item.index}
      />
      <Calendar
        renderArrow={direction =>
          direction === 'left' ? (
            <ArrowLeft
              iconWidth={Sizes.size5}
              iconHeight={Sizes.size12}
              iconColor={'#347474'}
              strokeWidth={Sizes.size2}
            />
          ) : (
            <ArrowRight
              iconWidth={Sizes.size6}
              iconHeight={Sizes.size12}
              iconColor={'#347474'}
              strokeWidth={Sizes.size2}
            />
          )
        }
        markingType={'period'}
        markedDates={{
          [currentDate]: {selected: true, selectedColor: '#347474'},
          [startDay]: {startingDay: true, color: '#D4E9E9', textColor: 'black'},
          ...selectDays,
          [endDay]: {endingDay: true, color: '#D4E9E9', textColor: 'black'},
        }}
        onDayPress={day => {
          handlerCalendar(day.timestamp);
        }}
        theme={{
          textSectionTitleColor: '#347474',
          todayBackgroundColor: '#11493E',
          todayTextColor: '#FCFCFC',
        }}
        style={styles.calendar}
      />
    </>
  );
}

export default CalendarDate;
