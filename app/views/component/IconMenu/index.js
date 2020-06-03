import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showMainMenu } from '../../../action/IntroductionAction'

import Logo from '../../../assets/images/logo.png'
import Styles from './style'

class IconMenu extends Component {

    render() {
        let { darkTheme } = this.props
        
        return (<View style={Styles.headerView}>
            <TouchableOpacity onPress={() => this.props.showMainMenu(true)}>
                <View style={[Styles.logoView, {backgroundColor: darkTheme ? '#333' : '#fff'}]}>
                    <Image style={{ width: 35, height: 35 }} source={Logo} />
                </View>
            </TouchableOpacity>
        </View>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showMainMenu
}, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        darkTheme: authentication.darkTheme
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconMenu)
