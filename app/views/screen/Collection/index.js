import React, { Component } from 'react'
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../component/Header'
import ImageBG from '../../component/ImageBG'
import { getBookmarkLocation } from '../../../action/LocationAction'
import { getBookmarkSpecies } from '../../../action/SpeciesAction'

import BG from '../../../assets/images/collection_bg.jpg';
import styles from './style'

class CollectionScreen extends Component {
    componentDidMount = () => {
        this.props.getBookmarkLocation()
        this.props.getBookmarkSpecies()
    }

    render() {
        let { bookmark_location, bookmarked_species } = this.props

        console.log(bookmarked_species)

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>

            <ImageBG name={BG} />
            <View style={styles.container}>
                <Header title="Saved Collections" />

                <Text style={styles.flatlistHeader}>Location</Text>
                {bookmark_location.length == 0 ? <View style={styles.smokeView}>
                    <Text style={styles.smokeText}>There is no saved wildlife service location. In order to bookmark a location, navigate to "Services".</Text>
                </View> : <>
                        {bookmark_location.map(location => {
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
                        })}</>}

                <Text style={styles.flatlistHeader}>Species</Text>
                {bookmarked_species.length == 0 ? <View style={styles.smokeView}>
                    <Text style={styles.smokeText}>There is no saved wildlife service location. In order to bookmark a location, navigate to "Services".</Text>
                </View> : <>
                        {bookmarked_species.map(location => {
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
                        })}</>}
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