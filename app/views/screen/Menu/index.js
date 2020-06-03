import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../component/Header'
import ImageBG from '../../component/ImageBG'
import { getBookmarkLocation } from '../../../action/LocationAction'

import BG from '../../../assets/images/collection_bg.jpg';
import styles from './style'

class MenuScreen extends Component {
    redirectTo = name => {
        this.props.navigation.push(name)
    }

    render() {

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>

            <ImageBG name={BG} />
            <View style={styles.container}>
                <Header title="Menu" />

                <View style={{ paddingTop: 20, paddingLeft: 20 }}>
                    <TouchableOpacity onPress={() => this.redirectTo('SavedCollections')} style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Saved Collections</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.redirectTo('Quiz')} style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Quiz</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    }
}

const mapStateToProps = props => {
    let { location } = props
    return {
        // bookmark_location: location.bookmark_location
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    // getBookmarkLocation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)