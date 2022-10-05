import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Styles} from './style';
import VictoryProject from './VictoryProject';
import {MembersData} from '../../../../assets/FakeData';
import {Sizes} from '../../../../assets/RootStyle';

function ProjectInfo(props) {
  const project = props.route.params.item;
  const styles = Styles();

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.container}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.subTitle}>
          This is the schedule of your tasks 📊{' '}
        </Text>
        <VictoryProject />
        <View style={styles.content}>
          <Text style={styles.header}>Description</Text>

          <Text style={styles.desc}>{project.description}</Text>
          <Text style={[styles.header, {marginBottom: Sizes.size5}]}>
            Start at
          </Text>
          <Text style={styles.desc}>{project.start}</Text>
          <Text style={[styles.header, {marginBottom: Sizes.size5}]}>
            Deadline
          </Text>
          <Text style={styles.desc}>{project.deadline}</Text>
          <Text style={styles.header}>Members</Text>

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

export default ProjectInfo;
