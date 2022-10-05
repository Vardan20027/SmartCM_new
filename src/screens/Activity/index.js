import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Styles} from './style';
import Victory from './Victory/VictoryBar';
import VictoryProgress from './Victory/VictoryProgress';
import VictoryLeave from './Victory/VictoryLeave';

const ActivityScreen = () => {
  const styles = Styles();

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>My Activties</Text>
        </View>

        <View style={styles.header_container}>
          <Text style={styles.header}>Week Tasks</Text>
        </View>
        <Victory />
        <View style={styles.header_container}>
          <Text style={styles.header}>Progress tasks</Text>
        </View>
        <View style={styles.schedule_header_container}>
          <Text style={styles.schedule_header}>
            This is the schedule of your tasks 📊
          </Text>
        </View>
        <VictoryProgress />
        <View style={styles.header_container}>
          <Text style={styles.header}>Annual leave</Text>
        </View>
        <View>
          <VictoryLeave />
        </View>
      </View>
    </ScrollView>
  );
};

export default ActivityScreen;
