import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 5
    },
    contentText: {
        fontSize: 14,
        paddingBottom: 10
    }
});

class DescriptionScreen extends Component {

    render() {
        let { data } = this.props.route.params

        return <ScrollView><View style={styles.container}>
            <Text style={styles.headerText}>Common Name</Text>
            <Text style={styles.contentText}>{data["Common Name"]}</Text>

            <Text style={styles.headerText}>Class</Text>
            <Text style={styles.contentText}>{data["Class"]}</Text>

            <Text style={styles.headerText}>Family</Text>
            <Text style={styles.contentText}>{data["Family"]}</Text>

            {data.Description &&
                <>
                    <Text style={styles.headerText}>Descrption</Text>
                    <HTMLView
                        value={data.Description} />
                </>}
        </View>
        </ScrollView>
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     completedOnboarding
// }, dispatch)

export default DescriptionScreen