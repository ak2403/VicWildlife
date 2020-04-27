import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Feather'

import { completedOnboarding } from '../../../action/IntroductionAction'

const slides = [
    {
        key: 1,
        title: 'Species List',
        text: 'Search for species in Victoria',
        image: require('../../../assets/images/list.png'),
        backgroundColor: '#22bcb5',
    }, {
        key: 2,
        title: 'Location',
        text: 'Search for wildlife service closest to you',
        image: require('../../../assets/images/location.png'),
        backgroundColor: '#febe29',
    }, {
        key: 3,
        title: 'Quiz',
        text: 'Do different level quizzes',
        image: require('../../../assets/images/quiz.png'),
        backgroundColor: '#59b2ab',
    }
];

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 320,
        height: 320,
        marginVertical: 32,
    },
    text: {
        color: '#333333',
        textAlign: 'center',
    },
    title: {
        fontSize: 22,
        color: '#333333',
        textAlign: 'center',
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class Introduction extends Component {
    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image style={{ width: 150, height: 150 }} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    _onDone = () => {
        this.props.completedOnboarding();
        this.props.navigation.navigate('Dashboard')
    }

    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="arrow-right"
                    color="#333"
                    size={24}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon onPress={this._onDone}
                    name="check"
                    color="#fff"
                    size={24}
                />
            </View>
        );
    };

    render() {
        return <View style={{ flex: 1, position: 'relative' }}>

            <Image source={require('../../../assets/images/bg.jpg')} style={{
                flex: 1, width: null,
                height: null, alignSelf: 'stretch', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
            }} />

            <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.5)' }}>
                <View style={{ width: '80%', marginTop: 50, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 40, lineHeight: 50, fontFamily: 'Roboto', color: '#fff' }}>Let's get started with Back To Nature</Text>
                </View>
{this._renderDoneButton()}
            </SafeAreaView>



        </View>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    completedOnboarding
}, dispatch)

export default connect(null, mapDispatchToProps)(Introduction)