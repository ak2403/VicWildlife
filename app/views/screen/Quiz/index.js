import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Item, Content, Picker, Form } from "native-base";
import Icon from 'react-native-vector-icons/Feather'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getQuizQuestions, resetQuiz } from '../../../action/PerformanceAction'

import Quiz from '../../component/Quiz'
import Styles from './style'

class QuizScreen extends Component {

    state = {
        options: {
            numberOfQuestions: '',
            difficultyLevel: '',
            typeOfQuestions: ''
        },
        quizStarted: false,
        listOfQuizQuestions: [],
        isAllOptionsSelected: null
    }

    onChange = (key, value) => {
        let { options } = this.state
        options[key] = value
        this.setState({
            options
        })
    }

    ProceedQuiz = () => {
        let { options } = this.state
        let isAllOptionsSelected = true;

        for (var key of Object.keys(options)) {
            if (options[key] == '') {
                isAllOptionsSelected = false
            }
        }

        if (isAllOptionsSelected) {
            this.props.getQuizQuestions(options)
        } else {
            this.setState({
                isAllOptionsSelected: false
            })
        }

    }

    componentDidUpdate = prevProps => {
        let { isQuizStarted, list_of_quiz_questions } = this.props

        if (isQuizStarted) {
            this.setState({
                quizStarted: true,
                listOfQuizQuestions: list_of_quiz_questions
            })
            this.props.resetQuiz()
        }

        return true;
    }

    closeQuiz = () => {
        this.setState({
            quizStarted: false
        })
        this.props.navigation.navigate("Dashboard")
    }

    render() {
        let { quizStarted, options, isAllOptionsSelected } = this.state;
        let { list_of_quiz_questions, darkTheme } = this.props;

        if (quizStarted) {
            return <Quiz data={list_of_quiz_questions} closeQuiz={() => this.closeQuiz()} />
        }

        return <View style={[Styles.controllerView, {backgroundColor: darkTheme ? 'rgba(52, 52, 52, 1)' : 'rgba(255, 255, 255, 1)'}]}>
            <View style={Styles.closeIcon}>
                <Icon name="x" size={20} color="#fff" onPress={this.closeQuiz} />
            </View>

            <View style={Styles.contentView}>
                <Text style={[Styles.headerTitle, {color: darkTheme ? '#fff' : '#333'}]}>Quiz</Text>
                <Form style={{ width: '100%' }}>
                    <Item picker style={Styles.dropdownView}>
                        <Picker
                            mode="dropdown"
                            style={{color: darkTheme ? '#fff' : '#333'}}
                            placeholderStyle={{ color: "#fff" }}
                            textStyle={{ color: "#fff", fontSize: 18, fontFamily: 'Calibre' }}
                            placeholderIconColor="#007aff"
                            selectedValue={options.numberOfQuestions}
                            onValueChange={value => this.onChange("numberOfQuestions", value)}>
                            <Picker.Item label="Select the number of questions" value="" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="15" value="15" />
                        </Picker>

                    </Item>
                    {(isAllOptionsSelected == false && options.numberOfQuestions == '') && <Text style={{ color: '#e74c3c' }}>Please select an option</Text>}
                    <Item picker style={Styles.dropdownView}>
                        <Picker
                            mode="dropdown"
                            style={{color: darkTheme ? '#fff' : '#333'}}
                            placeholderStyle={{ color: "#bfc6ea" }}
                            textStyle={{ color: "#fff", fontSize: 18, fontFamily: 'Calibre' }}
                            placeholderIconColor="#007aff"
                            selectedValue={options.difficultyLevel}
                            onValueChange={value => this.onChange("difficultyLevel", value)}
                        >
                            <Picker.Item label="Select the difficulty" value="" />
                            <Picker.Item label="Easy" value="easy" />
                            <Picker.Item label="Medium" value="medium" />
                            <Picker.Item label="Hard" value="hard" />
                        </Picker>
                    </Item>
                    {(isAllOptionsSelected == false && options.difficultyLevel == '') && <Text style={{ color: '#e74c3c' }}>Please select an option</Text>}
                    <Item picker style={Styles.dropdownView}>
                        <Picker
                            mode="dropdown"
                            style={{color: darkTheme ? '#fff' : '#333'}}
                            placeholderStyle={{ color: "#bfc6ea" }}
                            textStyle={{ color: "#fff", fontSize: 18, fontFamily: 'Calibre' }}
                            placeholderIconColor="#007aff"
                            selectedValue={options.typeOfQuestions}
                            onValueChange={value => this.onChange("typeOfQuestions", value)}
                        >
                            <Picker.Item label="Select the Question Type" value="" />
                            <Picker.Item label="Multiple Options" value="multiple" />
                            <Picker.Item label="Any" value="any" />
                        </Picker>
                    </Item>
                    {(isAllOptionsSelected == false && options.typeOfQuestions == '') && <Text style={{ color: '#e74c3c' }}>Please select an option</Text>}
                </Form>

                <View style={Styles.buttonStyle}>
                    <Button title="Start Quiz" onPress={() => this.ProceedQuiz()} />
                </View>
            </View>
        </View>
    }
}

const mapStateToProps = props => {
    let { performance, authentication } = props
    return {
        list_of_quiz_questions: performance.list_of_quiz_questions,
        isQuizStarted: performance.isQuizStarted,
        darkTheme: authentication.darkTheme
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getQuizQuestions,
    resetQuiz
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen)