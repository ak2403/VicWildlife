import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Styles from './style'

const ListCard = props => {
    let { image, title, subtitle } = props

    return (
        <View style={Styles.container}>
            <Image source={image} style={{ width: 50, height: 50, marginRight: 20 }} />
            <View>
                <Text style={Styles.titleText}>{title}</Text>
                <Text style={Styles.subtitleText}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default ListCard