import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LocationScreen from '../Location'
import PerformanceScreen from '../Performance'

import Icon from 'react-native-vector-icons/MaterialIcons'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
        <Tab.Screen name="Species" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={20} />
          ),
        }} />
        <Tab.Screen name="Location" component={LocationScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="my-location" size={20} />
          ),
        }} />
        <Tab.Screen name="Quiz" component={PerformanceScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="question-answer" size={20} />
          ),
        }} />
        <Tab.Screen name="Collections" component={SettingsScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="collections-bookmark" size={20} />
          ),
        }} />
      </Tab.Navigator>
  );
}