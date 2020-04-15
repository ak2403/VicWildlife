import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

class PerformanceScreen extends Component{
    render(){
        return <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Quiz</Text>
            <Button title="Take a Quiz" onPress={() => this.props.navigation.navigate("TakeaQuiz")} />
        </View>
    }
}

export default PerformanceScreen