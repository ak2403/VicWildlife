import * as React from 'react';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { Switch } from 'native-base'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SpeciesScreen from '../Species'
import LocationScreen from '../Location'
import NewsScreen from '../News'
import MenuScreen from '../Menu'
import PerformanceScreen from '../Performance'
import CollectionScreen from '../Collection'
import DonationScreen from '../Donation'

import { showMainMenu, switchAppTheme, toggleDarkTheme, checkNetwork, toggleOfflineMode } from '../../../action/IntroductionAction'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Logo from '../../../assets/images/logo.png';

import GestureRecognizer from 'react-native-swipe-gestures';

const Tab = createBottomTabNavigator();

class App extends React.Component {

  state = {
    showMenuView: false,
    selectedTheme: ''
  }

  switchTheme = () => {
    let { selectedTheme } = this.state
    let newSelectedTheme = selectedTheme == 'help' ? 'learn' : 'help'
    this.props.switchAppTheme(newSelectedTheme)
    this.setState({
      selectedTheme: newSelectedTheme
    })
  }

  componentDidMount = () => {
    this.setState({
      selectedTheme: this.props.userTheme
    })
  }

  componentDidUpdate = () => {
    return true
  }

  onSwipeLeft(gestureState) {
    this.setState({ showMenuView: false });
    this.props.showMainMenu(false)
  }

  componentDidUpdate = props => {
    let { showMenuView } = this.state
    let { showMenu } = this.props

    if (!showMenuView) {
      if (showMenu) {
        this.setState({
          showMenuView: true
        })
      }
    }
    return true
  }

  redirectTo = path => {
    this.props.navigation.push(path, {
      isSecondary: true
    })
  }

  toggleDarkTheme = () => {
    let { darkTheme } = this.props
    this.props.toggleDarkTheme(!darkTheme)
  }

  toggleOfflineMode = () => {
    let { offlineMode } = this.props

    if (!offlineMode) {
      Alert.alert("Notes", "The Services, Quiz and NewsFeed will be disabled when turning to offline mode.",
        [{
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }, {
          text: "Proceed",
          onPress: () => this.props.toggleOfflineMode(!offlineMode)
        }],
        { cancelable: false }
      );
    } else {
      this.props.toggleOfflineMode(!offlineMode)
    }
  }

  render() {
    let { showMenuView, selectedTheme } = this.state
    let { darkTheme, offlineMode } = this.props

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    let menuOptions = []
    let mainNavigation = []
    if (selectedTheme == "help") {
      mainNavigation = [{
        name: "News",
        component: NewsScreen,
        icon: "question-answer"
      }, {
        name: "Donation",
        component: DonationScreen,
        icon: "list"
      }, {
        name: "Services",
        component: LocationScreen,
        icon: "my-location"
      }]

      menuOptions = [{
        name: "Species",
        component: "Species",
        icon: "list"
      }, {
        name: "Quiz",
        component: "Quiz",
        icon: "my-location"
      }, {
        name: "Saved Collection",
        component: "SavedCollections",
        icon: "collections-bookmark"
      }]
    } else {
      mainNavigation = [{
        name: "Species",
        component: SpeciesScreen,
        icon: "list"
      }, {
        name: "News",
        component: NewsScreen,
        icon: "question-answer"
      }, {
        name: "Quiz",
        component: PerformanceScreen,
        icon: "question-answer"
      }]
      menuOptions = [{
        name: "Services",
        component: "Services",
        icon: "my-location"
      }, {
        name: "Donation",
        component: "Donation",
        icon: "list"
      }, {
        name: "Saved Collection",
        component: "SavedCollections",
        icon: "collections-bookmark"
      }]
    }

    return (
      <View style={{ flex: 1, position: 'relative' }}>
        <Tab.Navigator tabBarOptions={{
          activeTintColor: '#2ecc71',
          inactiveTintColor: darkTheme ? "#9a98a1" : "#333",
          labelStyle: {
            fontWeight: 'bold',
            fontSize: 12
          },
          style: {
            paddingTop: 10,
            backgroundColor: darkTheme ? 'rgba(35,35,39, 1)' : 'rgba(255,255,255, 0.8)'
          }
        }}>
          {mainNavigation.map(list => <Tab.Screen name={list.name} component={list.component} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={list.icon} size={24} color={darkTheme ? "#9a98a1" : "#333"} />
            ),
          }} />)}
        </Tab.Navigator>


        {showMenuView &&
          <GestureRecognizer
            onSwipeLeft={(state) => this.onSwipeLeft(state)}
            config={config}
            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
          >
            <TouchableOpacity style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(52,52,52,0.5)' }} onPress={() => this.onSwipeLeft('')}></TouchableOpacity>

            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 250, paddingTop: 50, paddingLeft: 20, paddingRight: 20, backgroundColor: darkTheme ? "#232327" : "#f6f6f6" }}>

              <View style={{ width: '100%', height: 150, alignItems: 'center' }}>
                <Image source={Logo} style={{ width: 160, height: 130 }} />
              </View>


              <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Calibre', color: darkTheme ? "#f6f6f6" : "#333" }}>{`The current theme of the app is "${selectedTheme}"`}</Text>
                <Text style={{ fontFamily: 'Calibre', fontSize: 12, color: darkTheme ? "#f6f6f6" : "#333" }}>featuring the Victorian Species, News Feed and Wildlife Services.</Text>
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                  <Text style={{ fontFamily: 'Calibre', color: darkTheme ? "#f6f6f6" : "#333" }}>{`Switch to ${selectedTheme == 'help' ? 'Learn' : 'Help'}`}</Text>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontFamily: 'Calibre', fontSize: 16, color: darkTheme ? "#f6f6f6" : "#333" }}>Learn</Text>
                  <Switch value={selectedTheme == "learn" ? false : true} onValueChange={this.switchTheme} />
                  <Text style={{ fontFamily: 'Calibre', fontSize: 16, color: darkTheme ? "#f6f6f6" : "#333" }}>Help</Text>
                </View>

              </View>

              <View style={{ marginTop: 80, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Calibre', fontSize: 16, color: darkTheme ? "#f6f6f6" : "#333" }}>Enable Dark Theme</Text>
                <Switch value={darkTheme} onValueChange={this.toggleDarkTheme} />

              </View>

              <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Calibre', fontSize: 16, color: darkTheme ? "#f6f6f6" : "#333" }}>Switch to Offline mode</Text>
                <Switch value={offlineMode} onValueChange={this.toggleOfflineMode} />

              </View>

              <View style={{ marginTop: 50 }}>
                {menuOptions.map(list => <TouchableOpacity onPress={() => this.redirectTo(list.component)} style={{ height: 40, marginTop: 10, marginBottom: 10, alignItems: 'center', flexDirection: 'row' }}>
                  <Icon style={{ marginRight: 15 }} name={list.icon} size={20} color={darkTheme ? "#9a98a1" : "#333"} />
                  <Text style={{ fontFamily: 'Calibre', fontSize: 18, color: darkTheme ? "#f6f6f6" : "#333" }}>{list.name}</Text>
                </TouchableOpacity>)}
              </View>
              <Text style={{ marginTop: 'auto', marginBottom: 20, textAlign: 'right', fontWeight: 'bold', fontFamily: 'Calibre', color: darkTheme ? "#f6f6f6" : "#333" }}>Version: 1.0.0</Text>
            </View>
          </GestureRecognizer>
        }
      </View>
    );
  }

}

const mapStateToProps = props => {
  let { authentication } = props

  return {
    showMenu: authentication.showMenu,
    userTheme: authentication.userTheme,
    darkTheme: authentication.darkTheme,
    offlineMode: authentication.offlineMode
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  showMainMenu,
  switchAppTheme,
  toggleDarkTheme,
  checkNetwork,
  toggleOfflineMode
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);