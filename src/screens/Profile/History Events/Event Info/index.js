import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Styles} from './style';
import {MembersData} from '../../../../assets/FakeData';
import {Sizes} from '../../../../assets/RootStyle';
import ProfileIcon from '../../../../assets/icons/profileIcon';
import Calendar1Icon from '../../../../assets/icons/calendar1';
import LocatIcon from '../../../../assets/icons/locatIcon';

function EventInfo(props) {
  const event = props.route.params.item;
  const styles = Styles();

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.container}>
        <Text style={styles.title}>{event.title}</Text>
        <Image
          source={require('../../../../assets/images/Event.png')}
          style={styles.image}
        />
        <View style={styles.content}>
          <View style={styles.info_container}>
            <View style={styles.info_icon}>
              <ProfileIcon iconColor={'#347474'} />
            </View>
            <Text style={styles.info}>Name Surname</Text>
          </View>
          <View style={styles.info_container}>
            <View style={styles.info_icon}>
              <Calendar1Icon />
            </View>
            <Text style={styles.info}>
              {event.date} | {event.duration}
            </Text>
          </View>
          <View style={styles.info_container}>
            <View style={styles.info_icon}>
              <LocatIcon iconColor={'#347474'} />
            </View>
            <Text style={styles.info}>{event.room}</Text>
          </View>
          <View style={styles.info_container}>
            <View style={styles.info_icon}>
              <Image
                source={require('../../../../assets/images/Ssilka.png')}
                style={styles.src_image}
              />
            </View>
            <Text style={styles.info}>
              https://www.figma.com/file/lgscxdggc...
            </Text>
          </View>
          <Text style={styles.header}>Description</Text>

          <Text style={styles.description}>{event.description}</Text>
          <Text style={styles.header}>Participants</Text>

          {MembersData.map(member => {
            return (
              <View style={styles.member_container}>
                <Image source={member.membImg} style={styles.member_image} />
                <View style={styles.member_info_container}>
                  <Text style={styles.member_info}>
                    {member.membName}
                    {member.membSurname}
                  </Text>
                  <Text style={styles.member_info}>{member.membSpec}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default EventInfo;
