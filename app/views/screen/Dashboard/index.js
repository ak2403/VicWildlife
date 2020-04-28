import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpeciesScreen from '../Species'
import LocationScreen from '../Location'
import PerformanceScreen from '../Performance'
import CollectionScreen from '../Collection'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#2ecc71',
      inactiveTintColor: '#333',
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 12
      },
      style: {
        backgroundColor: 'rgba(255,255,255, 0.8)'
      }
    }}>
      <Tab.Screen name="Species" component={SpeciesScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="list" size={20} color="#333" />
        ),
      }} />
      <Tab.Screen name="Services" component={LocationScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="my-location" size={20} color="#333" />
        ),
      }} />
      <Tab.Screen name="Quiz" component={PerformanceScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="question-answer" size={20} color="#333" />
        ),
      }} />
      <Tab.Screen name="Collections" component={CollectionScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="collections-bookmark" size={20} color="#333" />
        ),
      }} />
    </Tab.Navigator>
  );
}