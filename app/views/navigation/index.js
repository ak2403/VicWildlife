import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from '../screen/Introduction'
import DashboardScreen from '../screen/Dashboard'
import LocationScreen from '../screen/Location'
import PerformanceScreen from '../screen/Performance'
import QuizScreen from '../screen/Quiz'

import { loadingAppStatus } from '../../action/IntroductionAction'

const Stack = createStackNavigator();

class App extends Component {
    componentDidMount = () => {
        this.props.loadingAppStatus()
    }

    render() {
        let {is_onboarding_completed, is_app_loaded} = this.props

        if(!is_app_loaded){
            return <View>
                <Text>Loading</Text>
            </View>
        }

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={is_onboarding_completed ? "Dashboard": "Onboarding"}>
                    <Stack.Screen name="Onboarding" component={IntroductionScreen} options={{
                        headerShown: false
                    }} />

                    <Stack.Screen name="Dashboard" component={DashboardScreen} options={{
                        // headerLeft: () => <View />
                        headerShown: false
                    }} />

                    <Stack.Screen name="TakeaQuiz" component={QuizScreen} options={{
                        headerShown: false
                    }} />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_onboarding_completed: authentication.is_onboarding_completed,
        is_app_loaded: authentication.is_app_loaded
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadingAppStatus
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);