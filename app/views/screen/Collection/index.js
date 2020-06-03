import React, { Component } from 'react'
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SegmentedControlTab from "react-native-segmented-control-tab";

import Header from '../../component/Header'
import ImageBG from '../../component/ImageBG'
import { getBookmarkLocation } from '../../../action/LocationAction'
import { getBookmarkSpecies, bookmarkSpecies } from '../../../action/SpeciesAction'

import BG from '../../../assets/images/collection_bg.jpg';
import styles from './style'

const SpeciesLists = ({ data, navigation, theme, bookmarkFunc, index }) => {
    let item = data
    let image_link = item.Image !== null ? item.Image : undefined;

    return <View style={[styles.CardView, theme && { backgroundColor: 'rgba(35,35,39, 0.8)' }]}>
        <View style={styles.ImageView}>
            {image_link ? <Image source={{ uri: image_link }} style={{ flex: 1 }} /> : <View>
                <Text>Image is not available.</Text>
            </View>}
        </View>

        <View style={styles.ContentView}>
            <Text numberOfLines={1} style={[styles.ContentText, theme && { color: theme ? "#dfdde3" : "#333" }]}>{item["Common_Name"]}</Text>
            <Text style={{ color: theme ? "#dfdde3" : "#333" }}>{item["Threatened_Status"]}</Text>
        </View>

        <View style={{ marginLeft: 'auto', width: 50, height: '100%' }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Description', {
                    data: item
                })
            }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Icon name="arrow-forward" size={24} color={theme ? "#dfdde3" : "#333"} />

            </TouchableOpacity>

            <TouchableOpacity onPress={() => bookmarkFunc(item, true, index)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="star" color={"#e0e"} size={24} />
                </View>
            </TouchableOpacity>
        </View>

    </View>
}

class CollectionScreen extends Component {
    state = {
        selectedIndex: 0
    }

    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };

    componentDidMount = () => {
        this.props.getBookmarkLocation()
        this.props.getBookmarkSpecies()
    }

    render() {
        let { selectedIndex } = this.state
        let { bookmark_location, bookmarked_species, route, darkTheme } = this.props
        let isSecondary = route.params ? route.params.isSecondary : false

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>

            <ImageBG name={BG} />
            <View style={styles.container}>
                <Header navigation={this.props.navigation} isSecondary={isSecondary} title="Collections" />

                <View style={{ flex: 1 }}>
                    <SegmentedControlTab
                        values={["Location", "Species"]}
                        selectedIndex={selectedIndex}
                        onTabPress={this.handleIndexChange}
                        tabStyle={styles.lightTabStyle}
                        activeTabStyle={styles.activeLightTab}
                        tabTextStyle={styles.lightTextStyle}
                        activeTabTextStyle={styles.activeTextStyle}
                    />

                    <View style={styles.contentLayer}>
                        {selectedIndex == 0 ? <>
                            {bookmark_location.length == 0 ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Calibre-Bold' }}>No saved locations.</Text>
                            </View> : bookmark_location.map(location => {
                                return <View key={location.id} style={styles.Card}>
                                    <View style={styles.cardTextView}>
                                        <Text style={styles.cardText}>Name: </Text>
                                        <Text style={styles.cardAnswer}>{location.name}</Text>
                                    </View>

                                    <View style={styles.cardTextView}>
                                        <Text style={styles.cardText}>Location: </Text>
                                        <Text style={styles.cardAnswer}>{location.formatted_address}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 10 }}>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => Linking.openURL(`tel:${location.formatted_phone_number}`)}>
                                            <Icon name="phone" size={24} />
                                            <Text style={styles.phoneText}>{location.formatted_phone_number}</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => Linking.openURL(location.website)}>
                                            <Icon name="language" size={28} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            })}
                        </> : <>
                                {bookmarked_species.length == 0 ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Calibre-Bold' }}>No saved species.</Text>
                                </View> : <FlatList
                                        key={item => item["Listed_SPRAT_TaxonID"]}
                                        data={bookmarked_species}
                                        renderItem={({ item, index }) => <SpeciesLists index={index} theme={darkTheme} data={item} navigation={this.props.navigation} bookmarkFunc={(list, isPresent, index) => this.props.bookmarkSpecies(list, isPresent, index)} />}
                                    />}
                            </>}

                    </View>
                </View>
            </View>

        </SafeAreaView>
    }
}

const mapStateToProps = props => {
    let { location, species, authentication } = props
    return {
        bookmarked_species: species.bookmarked_species,
        bookmark_location: location.bookmark_location,
        darkTheme: authentication.darkTheme
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getBookmarkLocation,
    getBookmarkSpecies,
    bookmarkSpecies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CollectionScreen)