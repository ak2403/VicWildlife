import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
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
                <Icon
                    name="check"
                    color="#333"
                    size={24}
                />
            </View>
        );
    };

    render() {
        return <AppIntroSlider
            activeDotStyle={{ backgroundColor: '#333' }}
            dotStyle={{ backgroundColor: '#e0e0e0' }}
            renderItem={this._renderItem}
            data={slides}
            onDone={this._onDone}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton} />;
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    completedOnboarding
}, dispatch)

export default connect(null, mapDispatchToProps)(Introduction)