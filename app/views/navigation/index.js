import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/** Importing the screen for the dashboard */
import IntroductionScreen from '../screen/Introduction'
import DashboardScreen from '../screen/Dashboard'
import QuizScreen from '../screen/Quiz'
import DescriptionScreen from '../screen/Description'
import CollectionScreen from '../screen/Collection'
import PerformanceScreen from '../screen/Performance'

/** Importing the actions */
import { loadingAppStatus } from '../../action/IntroductionAction'

/**
 * Initializing the stack navigation for the dashboard of the application.
 */
const Stack = createStackNavigator();

class App extends Component {
    // Checking the loading status of the application
    componentDidMount = () => {
        this.props.loadingAppStatus()
    }

    render() {
        let {is_onboarding_completed, is_app_loaded} = this.props

        // Shown loading text when the application is retrieving the local storage data
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

                    <Stack.Screen name="Description" component={DescriptionScreen} options={{
                        // headerShown: false
                    }} />

                    <Stack.Screen name="SavedCollections" component={CollectionScreen} options={{
                        headerShown: false
                    }} />

                    <Stack.Screen name="Quiz" component={PerformanceScreen} options={{
                        headerShown: false
                    }} />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

/** Initializing the props from the redux that is needed for this component */
const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_onboarding_completed: authentication.is_onboarding_completed,
        is_app_loaded: authentication.is_app_loaded
    }
}

/** Attaching the dispatch to the actions of this component */
const mapDispatchToProps = dispatch => bindActionCreators({
    loadingAppStatus
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);