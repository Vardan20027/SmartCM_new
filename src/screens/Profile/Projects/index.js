import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import {ProjectsData} from '../../../assets/FakeData';
import ArrowRightNew from '../../../assets/icons/arrowRightNew';
import * as RootNavigation from '../../../navigation/RootNavigation';

function Projects(props) {
  const styles = Styles();
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={styles.content}
        onPress={() => {
          RootNavigation.navigate('Project Info', {item});
        }}>
        <View>
          <Image source={item.img} style={styles.image} />
        </View>
        <View style={styles.project_info}>
          <Text style={styles.project_title}>{item.title}</Text>
          <Text style={styles.description}>{item.short}</Text>
        </View>
        <ArrowRightNew />
      </TouchableOpacity>
    </>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <View style={styles.flat}>
        <FlatList
          data={ProjectsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default Projects;
