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
import Styles from './style'

// #C4E538 Logo color
class Introduction extends Component {

    state = {
        isWelcomeCompleted: false,
        isOptionsSelected: false,
        selectedOptions: ''
    }

    welcomeBoardingDone = () => {
        this.setState({
            isWelcomeCompleted: true
        })
    }

    _onDone = () => {
        let {isOptionsSelected, selectedOptions} = this.state

        if(isOptionsSelected){
            this.props.completedOnboarding(selectedOptions);
            this.props.navigation.navigate('Dashboard')
        }
    }

    selectTheme = theme => {
        this.setState({
            isOptionsSelected: true,
            selectedOptions: theme
        })
    }

    render() {
        let { isWelcomeCompleted, isOptionsSelected, selectedOptions } = this.state

        return <View style={{ flex: 1 }}>

            <ImageBG name={BG} />

            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.5)', flex: 1 }}>
                <View style={{ padding: 20, height: 130 }}>
                    <View style={{ width: '100%', marginTop: 50, paddingLeft: 20 }}>
                        <Text style={{ fontSize: 28, fontWeight: 'bold', lineHeight: 50, fontFamily: 'Calibre-Regular', color: '#fff' }}>Welcome to VicWildlife</Text>
                    </View>

                    {/* <View style={{ marginTop: 50, paddingLeft: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ListCard image={QuizIcon} title="Quiz" subtitle="Do different level quizzes" />
                        <ListCard image={EmergencyIcon} title="Wildlife Service" subtitle="Search for wildlife service closest to you" />
                        <ListCard image={ListIcon} title="Species list" subtitle="Search for species in Victoria" />
                    </View> */}
                </View>

                {isWelcomeCompleted ?
                    <>
                        <View style={{ alignItems: 'center', flex: 0.9, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.selectTheme("learn")}>
                                <View style={[Styles.checkboxOptionsLayout, selectedOptions == 'learn' ? Styles.selected : {}]}>
                                    <View style={Styles.checkboxLayout}>
                                        <View style={Styles.checkboxView}>
                                            {selectedOptions == 'learn' && <Icon name="check" size={18} />}
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text style={Styles.optionTitleText}>Do you want to learn?</Text>
                                        <Text style={Styles.optionSubtitleText}>This will highlight the features such as Species, Quiz, News</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.selectTheme("help")}>
                                <View style={[Styles.checkboxOptionsLayout, selectedOptions == 'help' ? Styles.selected : {}]}>
                                    <View style={Styles.checkboxLayout}>
                                        <View style={Styles.checkboxView}>
                                        {selectedOptions == 'help' && <Icon name="check" size={18} />}
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text style={Styles.optionTitleText}>Do you want to help?</Text>
                                        <Text style={Styles.optionSubtitleText}>This will highlight the features such as News, Wildlife Services, Donations</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 'auto', marginBottom: 30, padding: 20 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: "#C4E538", borderRadius: 5, height: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                                onPress={this._onDone}
                                underlayColor='#fff'>
                                <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 18 }}>Let's get started</Text>
                            </TouchableOpacity>
                        </View>

                    </>
                    : <>
                        <View>

                        </View>

                        <View style={{ marginTop: 'auto', marginBottom: 30, padding: 20 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: "#C4E538", borderRadius: 5, height: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                                onPress={this.welcomeBoardingDone}
                                underlayColor='#fff'>
                                <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 18 }}>Next</Text>
                            </TouchableOpacity>
                        </View>

                    </>}


            </View>

        </View>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    completedOnboarding
}, dispatch)

export default connect(null, mapDispatchToProps)(Introduction)