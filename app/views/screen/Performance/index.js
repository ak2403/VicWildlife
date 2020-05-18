import React, { Component } from 'react'
import { View, Text, Button, FlatList, SafeAreaView, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getQuizStatistics } from '../../../action/PerformanceAction'
import ImageBG from '../../component/ImageBG'
import Header from '../../component/Header'
import BG from '../../../assets/images/quiz_bg.jpg';

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
        let { quiz_statistics, offlineMode } = this.props

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <ImageBG name={BG} />


            <View style={styles.container}>
                <Header title="Quiz" />

                {offlineMode ? <View><Text>The app is in offline mode</Text></View> : <><View style={{ flex: 1 }}>
                    <Text style={styles.flatlistHeader}>Statistics</Text>
                    {quiz_statistics.length == 0 ? <View style={styles.smokeView}>
                        <Text style={styles.smokeText}>There is no history of quiz. To get started with a quiz, press "Take a Quiz" button.</Text>
                    </View> :
                        <FlatList
                            data={quiz_statistics}
                            renderItem={({ item }) => <ListCard data={item} />}
                            keyExtractor={item => item.id}
                        />}
                </View>

                <View style={styles.submitButton}>

                    <Button title="Take a Quiz" onPress={() => this.props.navigation.navigate("TakeaQuiz")} />

                </View></>}

            </View>
        </SafeAreaView>
    }
}

const mapStateToProps = props => {
    let { performance, authentication } = props
    return {
        quiz_statistics: performance.quiz_statistics,
        offlineMode: authentication.offlineMode
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getQuizStatistics
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceScreen)