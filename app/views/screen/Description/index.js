import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/Feather'

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

class DescriptionScreen extends Component {

    render() {
        let { data } = this.props.route.params
        console.log(data)
        return <View>
        <Text>Common Name</Text>
        <Text>{data["Common Name"]}</Text>

        <Text>Class</Text>
        <Text>{data["Class"]}</Text>

        <Text>Family</Text>
        <Text>{data["Family"]}</Text>

            <Text>Descrption</Text>
            {/* <Text>{data.Description}</Text> */}
            <HTMLView
                value={data.Description} />
        </View>
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     completedOnboarding
// }, dispatch)

export default DescriptionScreen