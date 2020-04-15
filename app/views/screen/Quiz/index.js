import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Item, Content, Picker, Form } from "native-base";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getQuizQuestions, resetQuiz } from '../../../action/PerformanceAction'

class QuizScreen extends Component {

    state = {
        options: {
            numberOfQuestions: '',
            difficultyLevel: '',
            typeOfQuestions: ''
        },
        quizStarted: false
    }

    onChange = (key, value) => {
        let { options } = this.state
        options[key] = value
        this.setState({
            options
        })
    }

    ProceedQuiz = () => {
        this.props.getQuizQuestions(this.state.options)
    }

    componentDidUpdate = prevProps => {
        let { isQuizStarted, navigation } = this.props

        if (isQuizStarted) {
            this.setState({
                quizStarted: true
            })
            this.props.resetQuiz()
        }

        return true;
    }

    render() {
        let { quizStarted } = this.state;

        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Quiz</Text>
            <Content>
                <Form>
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            style={{ width: undefined }}
                            placeholder="Select the number of questions"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            // selectedValue={this.state.selected2}
                            onValueChange={value => this.onChange("numberOfQuestions", value)}
                        >
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="15" value="15" />
                        </Picker>
                    </Item>

                    <Item picker>
                        <Picker
                            mode="dropdown"
                            style={{ width: undefined }}
                            placeholder="Select the difficulty"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            // selectedValue={this.state.selected2}
                            onValueChange={value => this.onChange("difficultyLevel", value)}
                        >
                            <Picker.Item label="Easy" value="easy" />
                            <Picker.Item label="Medium" value="medium" />
                            <Picker.Item label="Hard" value="hard" />
                        </Picker>
                    </Item>

                    <Item picker>
                        <Picker
                            mode="dropdown"
                            style={{ width: undefined }}
                            placeholder="Select the Question Type"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            // selectedValue={this.state.selected2}
                            onValueChange={value => this.onChange("typeOfQuestions", value)}
                        >
                            <Picker.Item label="Any" value="any" />
                            <Picker.Item label="Multiple Options" value="multiple" />
                            <Picker.Item label="True/False" value="boolean" />
                        </Picker>
                    </Item>
                </Form>
                <Button title="Start Quiz" onPress={this.ProceedQuiz} />
            </Content>
        </View>
    }
}

const mapStateToProps = props => {
    let { performance } = props
    return {
        list_of_quiz_questions: performance.list_of_quiz_questions,
        isQuizStarted: performance.isQuizStarted
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getQuizQuestions,
    resetQuiz
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen)