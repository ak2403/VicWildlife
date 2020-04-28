import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ImageBG from '../../component/ImageBG'
import Header from '../../component/Header'
import BG from '../../../assets/images/questions_bg.jpg';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Roboto',
        paddingBottom: 5,
        color: '#fff'
    },
    contentText: {
        fontSize: 14,
        paddingBottom: 10,
        fontFamily: 'Roboto',
        color: '#fff'
    }
});

const htmlStyles = StyleSheet.create({
    p: {
        fontSize: 14,
        paddingBottom: 10,
        fontFamily: 'Roboto',
        color: '#fff'
    }
});

class DescriptionScreen extends Component {

    render() {
        let { data } = this.props.route.params
        let image_link = data.Image !== null ? data.Image : undefined;

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            <ImageBG name={BG} />
            <ScrollView style={{ flex: 1 }}>

                <View style={styles.container}>
                    {image_link && <View style={{height: 250, marginBottom: 20}}>
                        <Image source={{ uri: image_link }} style={{ flex: 1 }} />
                    </View>}

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
                                stylesheet={htmlStyles}
                                value={`<p>${data.Description}</p>`} />
                        </>}
                </View>
            </ScrollView>
        </SafeAreaView>

    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     completedOnboarding
// }, dispatch)

export default DescriptionScreen