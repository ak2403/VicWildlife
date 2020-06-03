import React, { Component } from 'react'
import { View, Text, ScrollView, Button, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/Feather'
import ImageBG from '../../component/ImageBG'

import BG from '../../../assets/images/bg.jpg';
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
        let { isOptionsSelected, selectedOptions } = this.state

        if (isOptionsSelected) {
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
                <View style={{ padding: 0, height: 130 }}>
                    <View style={{ width: '100%', marginTop: 50, paddingLeft: 20 }}>
                        <Text style={{ fontSize: 34, fontWeight: 'bold', lineHeight: 50, fontFamily: 'Calibre-Bold', color: '#fff' }}>Welcome to VicWildlife</Text>
                    </View>
                </View>

                {isWelcomeCompleted ?
                    <>

                        <View style={{ alignItems: 'center', flex: 0.9, justifyContent: 'center' }}>
                            <View style={{ width: '80%', marginBottom: 10 }}>
                                <Text style={{ color: '#fff', fontFamily: 'Calibre-Bold', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Choose your main goal?</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Icon name="info" color={"#fff"} style={{ marginRight: 10 }} size={18} />
                                    <Text style={{ color: '#fff', fontFamily: 'Calibre', fontSize: 14 }}>You can also change the goal later by going into the Menu of the app.</Text>
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => this.selectTheme("learn")}>
                                <View style={[Styles.checkboxOptionsLayout, selectedOptions == 'learn' ? Styles.selected : {}]}>
                                    <View style={Styles.checkboxLayout}>
                                        <View style={Styles.checkboxView}>
                                            {selectedOptions == 'learn' && <Icon name="check" color={"#fff"} size={18} />}
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
                                            {selectedOptions == 'help' && <Icon name="check" color={"#fff"} size={18} />}
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
                        <ScrollView>
                            <View style={{ marginLeft: 20, marginRight: 20 }}>
                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ fontFamily: 'Calibre', fontSize: 18, color: "#fff", marginBottom: 10 }}>Do you know what is the issue that is faced during the rescue operations?</Text>
                                    <Text style={{ fontFamily: 'Calibre', fontWeight: 'bold', fontSize: 24, color: "#fff" }}>The wildlife rescue volunteers need to be in there much, much sooner – that has not happened.</Text>
                                </View>
                                
                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ fontFamily: 'Calibre', fontSize: 18, color: "#fff", marginBottom: 10 }}>Do you know what was the number of animal deaths in bushfire?</Text>
                                    <Text style={{ fontFamily: 'Calibre', fontWeight: 'bold', fontSize: 24, color: "#fff" }}>It's been estimated that 1.25 billion native animals have perished in the Australian bushfires</Text>
                                </View>

                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ fontFamily: 'Calibre', fontSize: 18, color: "#fff", marginBottom: 10 }}>What was the economic damage done by the latest bushfires?</Text>
                                    <Text style={{ fontFamily: 'Calibre', fontWeight: 'bold', fontSize: 24, color: "#fff" }}>Economic damage exceeds the record A$4.4 billion set by the 2009 “Black Saturday” blazes</Text>
                                </View>

                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ color: "#C4E538", fontFamily: 'Calibre-Bold', fontSize: 28 }}>In order to help the wildlife volunteers,</Text>
                                    <Text style={{ fontFamily: 'Calibre', fontSize: 20, color: "#fff" }}>We are dedicated towards providing knowledge about Victorian species and conserving the wildlife. We also streamline assistance for injured and orphaned wildlife.</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <View style={{ marginTop: 'auto', marginBottom: 20, padding: 20 }}>
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