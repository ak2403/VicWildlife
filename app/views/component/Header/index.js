import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showMainMenu } from '../../../action/IntroductionAction'

import Styles from './style'

class Header extends Component {

    render() {
        let { title } = this.props
        return (<View style={Styles.headerView}>
            <TouchableOpacity onPress={() => this.props.showMainMenu(true)}>
                <View style={{ width: 40, height: 40, backgroundColor: '#2ecc71', marginRight: 10, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{fontFamily: 'Calibre', fontSize: 14, fontWeight: 'bold', color: '#fff'}}>VW</Text>
                </View>
            </TouchableOpacity>
            <Text style={Styles.headerTitle}>{title}</Text>
            {/* <Icon name="help" size={28} color="#fff" style={{ opacity: 0 }} /> */}
        </View>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showMainMenu
}, dispatch)

export default connect('', mapDispatchToProps)(Header)
