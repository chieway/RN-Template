import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import Hot from '../pages/Hot';
import Find from '../pages/Find';
import Booklet from '../pages/Booklet';
import My from '../pages/My';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      // activeColor="#e91e63"
      // style={{backgroundColor: '#efefef'}}
      initialRouteName="Home"
      activeColor="#4285f7"
      inactiveColor="gary"
      shifting={false}
      barStyle={{backgroundColor: '#eee',height: 80}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={30}  />
          ),
        }}
      />
      <Tab.Screen
        name="Hot"
        component={Hot}
        options={{
          tabBarLabel: '热门',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="whatshot" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={Find}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Booklet"
        component={Booklet}
        options={{
          tabBarLabel: '小册',
          tabBarIcon: ({color}) => (
            <AntDesign name="book" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="My"
        component={My}
        options={{
          tabBarLabel: '我',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
