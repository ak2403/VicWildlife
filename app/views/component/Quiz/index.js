import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { CheckBox } from 'native-base'
import Icon from 'react-native-vector-icons/Feather'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styles from './style'

import {saveQuiz} from '../../../action/PerformanceAction'

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lengthOfQuestions: this.props.data.length,
            answersByUser: new Array(this.props.data.length),
            currentQuestionIndex: 0,
            showLeftIcon: false,
            showRightIcon: true,
            correctAnswerByUser: 0,
            completedQuiz: false
        }
    }

    answerSelected = value => {
        let { answersByUser, currentQuestionIndex } = this.state
        answersByUser[currentQuestionIndex] = value
        this.setState({
            answersByUser
        })
    }

    proceedNextStep = () => {
        let { currentQuestionIndex, lengthOfQuestions, showRightIcon } = this.state
        currentQuestionIndex += 1;

        if (currentQuestionIndex == lengthOfQuestions - 1) {
            showRightIcon = false
        }

        this.setState({
            currentQuestionIndex,
            showRightIcon,
            showLeftIcon: true
        })
    }

    proceedPrevStep = () => {
        let { currentQuestionIndex, showLeftIcon } = this.state
        currentQuestionIndex -= 1

        if (currentQuestionIndex == 0) {
            showLeftIcon = false
        }

        this.setState({
            currentQuestionIndex,
            showLeftIcon,
            showRightIcon: true
        })
    }

    calculateAnswer = () => {
        let { answersByUser, lengthOfQuestions } = this.state
        let { data } = this.props

        let correctAnswerCount = 0;

        for (let i = 0; i < lengthOfQuestions; i++) {
            let currentQuest = data[i]
            if (currentQuest["correct_answer"] == answersByUser[i]) {
                correctAnswerCount += 1
            }
        }

        this.setState({
            correctAnswerByUser: correctAnswerCount,
            completedQuiz: true
        })

        this.props.saveQuiz([{
            correctAnswerByUser: correctAnswerCount,
            totalQuestions: lengthOfQuestions,
            completedQuiz: true,
            date: new Date().toLocaleDateString()
        }])

    }

    closeQuiz = () => {
        this.props.closeQuiz()
    }

    render() {
        let { lengthOfQuestions, answersByUser, currentQuestionIndex, showLeftIcon, showRightIcon, correctAnswerByUser, completedQuiz } = this.state
        let { data } = this.props
        let selectedAnswer = ''

        let currentQuestion = data[currentQuestionIndex]
        let options = JSON.parse(JSON.stringify(currentQuestion.incorrect_answers));
        options.push(currentQuestion.correct_answer)

        var shuffe_options = [].concat(options);
        shuffe_options.sort(function () {
            return 0.5 - Math.random();
        });

        if (answersByUser[currentQuestionIndex]) {
            selectedAnswer = answersByUser[currentQuestionIndex]
        }


        return <View style={styles.container}>
            {completedQuiz ? <View>
                <Text>{`You have answered ${correctAnswerByUser} out of ${lengthOfQuestions}`}</Text>
                <Button title="Finish the Quiz" onPress={() => this.props.closeQuiz()} />
            </View> :
                <>
                    <View style={styles.closeIcon}>
                        <Icon name="x" size={20} color="#fff" onPress={() => this.props.closeQuiz()} />
                    </View>
                    <View style={styles.questionsView}>
                        <View style={styles.questionView}>
                            <Text style={styles.questionText}>{currentQuestion.question}</Text>
                        </View>

                        <View style={styles.optionsView}>
                            {shuffe_options.map(list => <TouchableOpacity key={list} onPress={() => this.answerSelected(list)}>
                                <View style={styles.optionListView}>
                                    <CheckBox checked={selectedAnswer == list ? true : false} />
                                    <Text style={styles.optionsText}>{list}</Text>
                                </View>
                            </TouchableOpacity>)}
                        </View>

                        <View style={styles.controlView}>
                            {showLeftIcon ? <Icon
                                name="arrow-left"
                                color="#333"
                                onPress={this.proceedPrevStep}
                                size={24}
                            /> : <View></View>}

                            {showRightIcon ? <Icon
                                name="arrow-right"
                                color="#333"
                                onPress={this.proceedNextStep}
                                size={24}
                            /> : <View></View>}

                            {currentQuestionIndex == lengthOfQuestions - 1 && <Icon
                                name="check"
                                color="#333"
                                size={24}
                                onPress={this.calculateAnswer}
                            />}

                        </View>
                    </View>
                </>}
        </View>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    saveQuiz
}, dispatch)

export default connect(null, mapDispatchToProps)(Quiz)