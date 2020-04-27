import React, { Component } from 'react'
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../component/Header'
import ImageBG from '../../component/ImageBG'
import { getBookmarkLocation } from '../../../action/LocationAction'

import BG from '../../../assets/images/collection_bg.jpg';
import styles from './style'

class CollectionScreen extends Component {
    componentDidMount = () => {
        this.props.getBookmarkLocation()
    }

    render() {
        let { bookmark_location } = this.props
        
        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
            
            <ImageBG name={BG} />
            <View style={styles.container}>
                <Header title="Saved Collections" />
                
                <Text style={styles.flatlistHeader}>Location</Text>
                {bookmark_location.length == 0 ? <View style={styles.smokeView}>
                    <Text style={styles.smokeText}>There is no bookmarked location.</Text>
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
                })}</> }
            </View>

        </SafeAreaView>
    }
}

const mapStateToProps = props => {
    let { location } = props
    return {
        bookmark_location: location.bookmark_location
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getBookmarkLocation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CollectionScreen)