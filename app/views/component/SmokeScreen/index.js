import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showMainMenu } from '../../../action/IntroductionAction'

import Styles from './style'

class SmokeScreen extends Component {

    render() {
        let { text } = this.props

        
        return (<View style={Styles.smokeScreenView}>
            <Text style={Styles.smokeText}>{text}</Text>
        </View>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    
}, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        isNetworkLive: authentication.isNetworkLive,
        offlineMode: authentication.offlineMode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmokeScreen)
