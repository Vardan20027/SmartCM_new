import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

function Participators({prts, data, setData}) {
  const [isActive, setIsActive] = useState(false);
  const {container, view, viewText} = styles();
  const handleParticipators = (item, key, name) => {
    setIsActive(item.id);
    setData({...data, [key]: name});
  };
  const DATA = [
    {
      id: 0,
      title: 'Name Surname',
    },
    {
      id: 1,
      title: 'Name Surname',
    },
    {
      id: 2,
      title: 'Name Surname',
    },
    {
      id: 3,
      title: 'Name Surname',
    },
  ];
  const renderItem = ({item}) => (
    <View style={container}>
      <TouchableOpacity
        style={view}
        onPress={() => handleParticipators(item, prts, item.title)}>
        <CheckBox value={isActive === item.id} />
        <Text style={viewText}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
}

export default Participators;
