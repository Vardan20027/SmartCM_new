import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Fonts, Sizes} from '../../../assets/RootStyle';
import ArrowLeft from '../../../assets/icons/arrowLeft';
import ArrowRight from '../../../assets/icons/arrowRight';
import moment from 'moment';
import {Styles} from './style';

function CalendarComp(props) {
  const styles = Styles();
  const currentDate = moment().format('MMM DD YYYY');
  const [selectDays, setSelectDays] = useState({});
  const [or, setOr] = useState([]);
  useEffect(() => {
    let day = {};

    props.Tasks.map(item => {
      const dayList = moment(item.date).format('MMM DD YYYY');
      day[dayList] = {
        periods: [
          {
            startingDay: true,
            endingDay: true,
            color: item.color,
            width: Sizes.size20,
            height: Sizes.size4,
          },
          {
            startingDay: true,
            endingDay: true,
            color: item.color,
            width: Sizes.size20,
            height: Sizes.size4,
          },
          {
            startingDay: true,
            endingDay: true,
            color: item.color,
            width: Sizes.size20,
            height: Sizes.size4,
          },
        ],
      };
      // if (day.hasOwnProperty(dayList)) {
      //   day[dayList] = {
      //     periods: [
      //       {
      //         startingDay: true,
      //         endingDay: true,
      //         color: item.color,
      //         width: Sizes.size20,
      //         height: Sizes.size4,
      //       },
      //       {
      //         startingDay: true,
      //         endingDay: true,
      //         color: item.color,
      //         width: Sizes.size20,
      //         height: Sizes.size4,
      //       },
      //     ],
      //   };
      // } else {
      //   day[dayList] = {
      //     periods: [
      //       {
      //         startingDay: true,
      //         endingDay: true,
      //         color: item.color,
      //         width: Sizes.size20,
      //         height: Sizes.size4,
      //       },
      //     ],
      //   };
      // }
    });

    setSelectDays(day);
  }, []);
  useEffect(() => {
    props.scrollToTop();
  }, []);
  return (
    <>
      <Calendar
        style={styles.calendar_2}
        renderArrow={direction =>
          direction === 'left' ? (
            <ArrowLeft
              iconWidth={Sizes.size7}
              iconHeight={Sizes.size16}
              iconColor={'#347474'}
              strokeWidth={Sizes.size2}
            />
          ) : (
            <ArrowRight
              iconWidth={Sizes.size8}
              iconHeight={Sizes.size16}
              iconColor={'#347474'}
              strokeWidth={Sizes.size2}
            />
          )
        }
        markingType={'multi-period'}
        markedDates={{
          ...selectDays,
          [or]: {
            selected: true,
            selectedColor: '#1db7bf',
          },
          [currentDate]: {selected: true, selectedColor: '#347474'},
        }}
        theme={{
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: 'red',
            },
          },
          todayTextColor: '#ffffff',
          todayBackgroundColor: '#11493E',
          calendarBackground: '#F5F5F5',
          textDayFontFamily: Fonts.nunito,
          textMonthFontFamily: Fonts.medium,
          textDayHeaderFontFamily: Fonts.regular,
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: Sizes.size14,
          textMonthFontSize: Sizes.size16,
          textDayHeaderFontSize: Sizes.size12,
        }}
        onDayPress={day => {
          setOr(day.dateString);
        }}
      />
    </>
  );
}

export default CalendarComp;
