import React, { Component } from 'react'
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getQuizStatistics } from '../../../action/PerformanceAction'

import styles from './style'

function ListCard({ data }) {
    return <View style={styles.Card}>
        <View style={styles.cardTextView}>
            <Text style={styles.cardText}>Correct Answers: </Text>
            <Text style={styles.cardAnswer}>{data.correctAnswerByUser}</Text>
        </View>

        <View style={styles.cardTextView}>
            <Text style={styles.cardText}>Total Questions: </Text>
            <Text style={styles.cardAnswer}>{data.totalQuestions}</Text>
        </View>

        <View style={styles.cardTextView}>
            <Text style={styles.cardText}>Date: </Text>
            <Text style={styles.cardAnswer}>{data.date}</Text>
        </View>
    </View>
}

class PerformanceScreen extends Component {
    componentDidMount = () => {
        this.props.getQuizStatistics()
    }

    render() {
        let { quiz_statistics } = this.props

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>

            <View style={styles.container}>
                <Text style={styles.headerText}>Quiz</Text>
                <View style={{flex: 1}}>
                    <Text style={styles.flatlistHeader}>Statistics</Text>
                    <FlatList
                        data={quiz_statistics}
                        renderItem={({ item }) => <ListCard data={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>

                <View style={styles.submitButton}>

                    <Button title="Take a Quiz" onPress={() => this.props.navigation.navigate("TakeaQuiz")} />

                </View>

            </View>
        </SafeAreaView>
    }
}

const mapStateToProps = props => {
    let { performance } = props
    return {
        quiz_statistics: performance.quiz_statistics
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getQuizStatistics
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceScreen)