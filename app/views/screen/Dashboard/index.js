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
        activeTintColor: '#e91e63',
      }}>
        <Tab.Screen name="Species" component={SpeciesScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={20} />
          ),
        }} />
        <Tab.Screen name="Services" component={LocationScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="my-location" size={20} />
          ),
        }} />
        <Tab.Screen name="Quiz" component={PerformanceScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="question-answer" size={20} />
          ),
        }} />
        <Tab.Screen name="Collections" component={CollectionScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="collections-bookmark" size={20} />
          ),
        }} />
      </Tab.Navigator>
  );
}