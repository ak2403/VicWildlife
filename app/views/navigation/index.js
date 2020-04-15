import * as React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from '../screen/Introduction'
import DashboardScreen from '../screen/Dashboard'
import LocationScreen from '../screen/Location'
import PerformanceScreen from '../screen/Performance'
import QuizScreen from '../screen/Quiz'

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={IntroductionScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Location" component={LocationScreen} options={{

                }} />

                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{
                    headerLeft: () => <View />
                }} />

                <Stack.Screen name="Quiz" component={PerformanceScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="TakeaQuiz" component={QuizScreen} options={{
                    headerShown: false
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;