import React from 'react'
import { View, Text } from 'react-native'

import Styles from './style'

const Header = props => {
    let { title } = props
    return (<View style={Styles.headerView}>
        <Text style={Styles.headerTitle}>{title}</Text>
    </View>)
}

export default Header
