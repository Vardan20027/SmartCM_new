import React, {useState, useRef} from 'react';
import {View, Pressable, Animated} from 'react-native';
import {Sizes} from '../../assets/RootStyle';
import {styles} from './tabStyle';
import HomeIcon from '../../assets/icons/homeIcon';
import NotifIcon from '../../assets/icons/notifIcon';
import ActivityIcon from '../../assets/icons/activityIcon';
import ProfileIcon from '../../assets/icons/profileIcon';
import AddButton from '../AddButton/AddButton';
import TabBarBackground from '../../assets/icons/TabBarBackground';

// export const refBar = React.createRef(null);

function TabBar({state, descriptors, navigation}) {
  const {
    container,
    container2,
    content,
    background,
    focusedSt,
    unFocusedSt,
    tabbarSt,
  } = styles();
  const [oneRender, setOneRender] = useState(false);
  const [f, setF] = useState(true);

  const mode = useRef(new Animated.Value(0)).current;
  const buttonSize = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 20,
        useNativeDriver: false,
      }),

      Animated.timing(buttonSize, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();

    if (oneRender) {
      setF(!f);
    }
  };
  const tasksX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [Sizes.size18, Sizes.size30 * -1],
  });

  const tasksY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [Sizes.size19, Sizes.size10 * -1],
  });

  const doneTasksX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [Sizes.size18, Sizes.size18],
  });

  const doneTasksY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [Sizes.size19, Sizes.size40 * -1],
  });

  const planeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [Sizes.size18, Sizes.size63],
  });

  const planeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [Sizes.size19, Sizes.size10 * -1],
  });

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const sizeStyle = {
    transform: [{scale: buttonSize}],
  };
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === 'none') {
    return null;
  }

  return (
    <View>
      <View style={tabbarSt}>
        <AddButton
          f={f}
          setF={setF}
          handlePress={handlePress}
          sizeStyle={sizeStyle}
          rotation={rotation}
          planeY={planeY}
          planeX={planeX}
          doneTasksY={doneTasksY}
          doneTasksX={doneTasksX}
          tasksY={tasksY}
          tasksX={tasksX}
          oneRender={oneRender}
          setOneRender={setOneRender}
        />
      </View>
      <Pressable style={container}>
        <TabBarBackground style={background} />
      </Pressable>

      <View style={content}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!f) {
              handlePress();
            }
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          const Svg = {
            Home: <HomeIcon iconColor={isFocused && f ? '#347474' : '#fff'} />,
            Notifications: (
              <NotifIcon iconColor={isFocused && f ? '#347474' : '#fff'} />
            ),
            Activity: (
              <ActivityIcon iconColor={isFocused && f ? '#347474' : '#fff'} />
            ),
            Profile: (
              <ProfileIcon iconColor={isFocused && f ? '#347474' : '#fff'} />
            ),
          };
          if (index > 3) {
            return null;
          }
          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={container2}
              key={route.key}>
              <View style={isFocused && f ? focusedSt : unFocusedSt}>
                {Svg[route.name]}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default TabBar;
