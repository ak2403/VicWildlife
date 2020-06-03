import React from 'react'
import { View, Text, Image } from 'react-native'

import Styles from './style'

const Popup = props => {
    let { data } = props

    return <View style={Styles.container}>

        <View style={Styles.popupContainer}>
            <View>
                <Text>{data.title}</Text>
            </View>
            <View>
                <Text>{data.date_published}</Text>
            </View>
            <View>
            <Image source={{ uri: data.primary_image_link }} style={{ width: '100%', height: 200 }} />
            </View>
        </View>       

    </View>
}

export default Popup