import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showMainMenu } from '../../../action/IntroductionAction'

import Logo from '../../../assets/images/logo.png'
import Styles from './style'

class Header extends Component {

    render() {
        let { title, isNetworkLive, offlineMode } = this.props

        
        return (<View style={Styles.headerView}>
            <TouchableOpacity onPress={() => this.props.showMainMenu(true)}>
                <View style={{ width: 50, height: 50, backgroundColor: '#d6d6d6', marginRight: 10, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 35, height: 35 }} source={Logo} />
                </View>
            </TouchableOpacity>
            <Text style={Styles.headerTitle}>{title}</Text>
            
            {!isNetworkLive && <View style={Styles.networkView}>
                <Text style={Styles.offlineText}>No Network connection.</Text>
            </View>}
            
            {(offlineMode && isNetworkLive) && <View style={Styles.offlineView}>
                <Text style={Styles.offlineText}>You are in offline mode.</Text>
            </View>}
        </View>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showMainMenu
}, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        isNetworkLive: authentication.isNetworkLive,
        offlineMode: authentication.offlineMode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
