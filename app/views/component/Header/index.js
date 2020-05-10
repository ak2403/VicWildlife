import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Styles from './style'

const Header = props => {
    let { title } = props
    return (<View style={Styles.headerView}>
        <Text style={Styles.headerTitle}>{title}</Text>
        {/* <Icon name="help" size={28} color="#fff" style={{ opacity: 0 }} /> */}
    </View>)
}

export default Header
