import React, { Component } from 'react'
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SegmentedControlTab from "react-native-segmented-control-tab";

import Header from '../../component/Header'
import ImageBG from '../../component/ImageBG'
import { getBookmarkLocation } from '../../../action/LocationAction'
import { getBookmarkSpecies } from '../../../action/SpeciesAction'

import BG from '../../../assets/images/collection_bg.jpg';
import styles from './style'

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
        let { bookmark_location, bookmarked_species, route } = this.props
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
                    />

                    <View>
                        {selectedIndex == 0 ? <>
                            {bookmark_location.length == 0 ? <Text>No saved locations.</Text> : bookmark_location.map(location => {
                                return <View key={location.id} style={styles.Card}>
                                    <View style={styles.cardTextView}>
                                        <Text style={styles.cardText}>Name: </Text>
                                        <Text style={styles.cardAnswer}>{location.name}</Text>
                                    </View>

                                    <View style={styles.cardTextView}>
                                        <Text style={styles.cardText}>Location: </Text>
                                        <Text style={styles.cardAnswer}>{location.formatted_address}</Text>
                                    </View>
                                </View>
                            })}
                        </> : <>
                                {bookmarked_species.length == 0 ? <Text>No saved species.</Text> : bookmarked_species.map(location => {
                                    return <View key={location.id} style={styles.Card}>
                                        <View style={styles.cardTextView}>
                                            <Text style={styles.cardText}>Name: </Text>
                                            <Text style={styles.cardAnswer}>{location["Common_Name"]}</Text>
                                        </View>

                                        <View style={styles.cardTextView}>
                                            <Text style={styles.cardText}>Status: </Text>
                                            <Text style={styles.cardAnswer}>{location["Threatened_Status"]}</Text>
                                        </View>
                                    </View>
                                })}
                            </>}

                    </View>
                </View>
            </View>

        </SafeAreaView>
    }
}

const mapStateToProps = props => {
    let { location, species } = props
    return {
        bookmarked_species: species.bookmarked_species,
        bookmark_location: location.bookmark_location
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getBookmarkLocation,
    getBookmarkSpecies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CollectionScreen)