import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/Feather'
import ImageBG from '../../component/ImageBG'
import ListCard from '../../component/ListCard'

import BG from '../../../assets/images/bg.jpg';
import QuizIcon from '../../../assets/images/quiz.png';
import EmergencyIcon from '../../../assets/images/emergency.png';
import ListIcon from '../../../assets/images/list.png';

import { completedOnboarding } from '../../../action/IntroductionAction'

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

// #C4E538 Logo color
class Introduction extends Component {
    _onDone = () => {
        this.props.completedOnboarding();
        this.props.navigation.navigate('Dashboard')
    }

    render() {
        return <View style={{ flex: 1 }}>

            <ImageBG name={BG} />

<View style={{backgroundColor: 'rgba(52, 52, 52, 0.5)', flex: 1}}>
            <View style={{ padding: 20 }}>
                <View style={{ width: '80%', marginTop: 50, paddingLeft: 20 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', lineHeight: 50, fontFamily: 'Roboto', color: '#fff' }}>Welcome to Back To Nature</Text>
                </View>

                <View style={{ marginTop: 50, paddingLeft: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <ListCard image={QuizIcon} title="Quiz" subtitle="Do different level quizzes" />
                    <ListCard image={EmergencyIcon} title="Wildlife Service" subtitle="Search for wildlife service closest to you" />
                    <ListCard image={ListIcon} title="Species list" subtitle="Search for species in Victoria" />
                </View>
            </View>

            <View style={{ marginTop: 'auto', marginBottom: 30, padding: 20 }}>
                <TouchableOpacity
                    style={{ backgroundColor: "#C4E538", borderRadius: 5, height: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                    onPress={this._onDone}
                    underlayColor='#fff'>
                    <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 18 }}>Let's get started</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    completedOnboarding
}, dispatch)

export default connect(null, mapDispatchToProps)(Introduction)