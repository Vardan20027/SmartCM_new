import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from '../style';
import {Sizes} from '../../../assets/RootStyle';
import UnreadIcon from '../../../assets/icons/unreadIcon';

function Unread({
  item,
  setVacation,
  vacation,
  hourly,
  setHourlyLead,
  setRemotelyLead,
  setLeadActionID,
  setVacationLead,
  setDayOffLead,
  setHourly,
  remotely,
  setRemotely,
  setDayOff,
  dayOff,
}) {
  const styles = Styles();
  const handlePress = item => {
    if (item.type === 'Hourly leave') {
      setHourly(!hourly);
    } else if (item.type === 'Day off') {
      setDayOff(!dayOff);
    } else if (item.type === 'Work remotely') {
      setRemotely(!remotely);
    } else if (item.type === 'Vacation') {
      setVacation(!vacation);
    } else {
      alert('The type is not defined');
    }

    setHourlyLead(item.role);
    setDayOffLead(item.role);
    setVacationLead(item.role);
    setRemotelyLead(item.role);
    item.read = true;

    if (item.role) {
      setLeadActionID(item.id);
      console.log('Selected UNREAD id:', item.id);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => handlePress(item)}>
        <View style={styles.image_container}>
          <Image source={item.avatar} style={styles.image} />
        </View>
        <View>
          <View style={styles.action}>
            <Text style={styles.text}>
              {item.name} {item.surname}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color:
                    item.action === 'accepted'
                      ? '#347474'
                      : null || item.action === 'declined'
                      ? '#EE9087'
                      : null,
                },
              ]}>
              {item.action}
            </Text>
            <Text style={styles.text}>{item.desc}</Text>
          </View>
          <View>
            <Text style={[styles.text, {color: '#949494'}]}>
              {item.date} | {item.time}
            </Text>
          </View>
        </View>
        <View style={styles.unread}>
          <UnreadIcon
            iconColor={'#347474'}
            iconWidth={Sizes.size8}
            iconHeight={Sizes.size8}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

export default Unread;
