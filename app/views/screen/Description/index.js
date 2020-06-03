import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ImageBG from '../../component/ImageBG'
import Header from '../../component/Header'
import BG from '../../../assets/images/questions_bg.jpg';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';

import Styles from './style'
import Icon from 'react-native-vector-icons/MaterialIcons';

// const htmlStyles = StyleSheet.create({
//     p: {
//         fontSize: 14,
//         paddingBottom: 10,
//         fontFamily: 'Calibre',
//         color: '#fff'
//     }
// });

class DescriptionScreen extends Component {

    state = {
        toggleHabitat: false,
        toggleDistribution: false
    }

    goBack = () => {
        this.props.navigation.push('Dashboard')
    }

    toggleView = type => {
        console.log(type)
        this.setState({
            [type]: !this.state[type]
        })
    }

    render() {
        let { data } = this.props.route.params
        let { toggleHabitat, toggleDistribution } = this.state
        let image_link = data.Image !== null ? data.Image : undefined;

        return <View style={{ flex: 1 }}>
            <ImageBG name={BG} />
            <View style={{ flex: 1 }}>

                <View style={Styles.container}>
                    {image_link && <View style={{ height: 250, marginBottom: 0, position: 'relative' }}>
                        <Image source={{ uri: image_link }} style={{ flex: 1 }} />
                        <TouchableOpacity onPress={this.goBack} style={{ backgroundColor: 'rgba(0,0,0,0.5)', marginLeft: 15, marginTop: 50, position: 'absolute', padding: 5, borderRadius: 20 }} >
                            <Icon name="arrow-back" size={24} color={"#fff"} />
                        </TouchableOpacity>

                    </View>}

                    <ScrollView style={{ flex: 1, marginBottom: 10, marginTop: -20, padding: 15, borderRadius: 5, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(52,52,52,0.8)', overflow: 'scroll' }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={Styles.headerText}>Common Name</Text>
                                <Text style={Styles.contentText}>{data["Common_Name"]}</Text>
                            </View>

                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={[Styles.headerText, { textAlign: 'right' }]}>Threatened Status</Text>
                                <Text style={[Styles.contentText, { textAlign: 'right' }]}>{data["Threatened_Status"]}</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={Styles.secondaryheaderText}>Class</Text>
                                <Text style={Styles.secondarycontentText}>{data["Class"]}</Text>
                            </View>

                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={[Styles.secondaryheaderText, { textAlign: 'center' }]}>Family</Text>
                                <Text style={[Styles.secondarycontentText, { textAlign: 'center' }]}>{data["Family"]}</Text>
                            </View>

                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={[Styles.secondaryheaderText, { textAlign: 'right' }]}>Genus</Text>
                                <Text style={[Styles.secondarycontentText, { textAlign: 'right' }]}>{data["Genus"]}</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={Styles.secondaryheaderText}>Scientific Name</Text>
                                <Text style={Styles.secondarycontentText}>{data["Scientific_Name"]}</Text>
                            </View>

                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={[Styles.secondaryheaderText, { textAlign: 'center' }]}>Kingdom</Text>
                                <Text style={[Styles.secondarycontentText, { textAlign: 'center' }]}>{data["Kingdom"]}</Text>
                            </View>

                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={[Styles.secondaryheaderText, { textAlign: 'right' }]}>Species</Text>
                                <Text style={[Styles.secondarycontentText, { textAlign: 'right' }]}>{data["Species"]}</Text>
                            </View>
                        </View>

                        {(data["Latitude"] && data["Longitude"]) &&
                            <View style={Styles.mapLayout}>
                                <MapView
                                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                    style={Styles.map}
                                    region={{
                                        latitude: Number(data["Latitude"]),
                                        longitude: Number(data["Longitude"]),
                                        latitudeDelta: 0.5,
                                        longitudeDelta: 0.21,
                                    }}>

                                    <Marker
                                        coordinate={{
                                            latitude: Number(data["Latitude"]),
                                            longitude: Number(data["Longitude"]),
                                        }}
                                        title={"You are here"} />
                                </MapView>
                            </View>}

                        {data["Habitat"] && <View style={{ flex: 1, marginBottom: 20 }}>
                            <Text style={Styles.secondaryheaderText}>Habitat</Text>
                            <TouchableOpacity onPress={() => this.toggleView("toggleHabitat")}>
                                <Text numberOfLines={toggleHabitat ? 0 : 4} style={Styles.secondarycontentText}>{data["Habitat"]}</Text>
                                <Text style={{ color: '#f1c40f', fontSize: 12, fontWeight: 'bold' }}>
                                    {!toggleHabitat ? `To read more, click on the text` : `To read less, click on the text`}
                                </Text>
                            </TouchableOpacity>
                        </View>}

                        {data["Australian_Distribution"] && <View style={{ flex: 1, marginBottom: 20 }}>
                            <Text style={Styles.secondaryheaderText}>Australian Distribution</Text>
                            <TouchableOpacity onPress={() => this.toggleView("toggleDistribution")}>
                                <Text numberOfLines={toggleDistribution ? 0 : 4} style={Styles.secondarycontentText}>{data["Australian_Distribution"]}</Text>
                                <Text style={{ color: '#f1c40f', fontSize: 12, fontWeight: 'bold' }}>
                                    {!toggleDistribution ? `To read more, click on the text` : `To read less, click on the text`}
                                </Text>
                            </TouchableOpacity>
                        </View>}
                    </ScrollView>

                    <View style={{ backgroundColor: '#fff',  height: 50, }}>
                        <TouchableOpacity>
                            <Text>Add to my favourite</Text>
                        </TouchableOpacity>
                    </View>






                </View>
            </View>
        </View>

    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     completedOnboarding
// }, dispatch)

export default DescriptionScreen