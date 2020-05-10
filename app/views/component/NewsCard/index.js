import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Styles from './style'

openLink = link => {
    Linking.canOpenURL(link).then(supported => {
        if (supported) {
            Linking.openURL(link);
        } else {
            console.log("Don't know how to open URI: " + link);
        }
    });
};

const NewsCard = props => {
    let { data, onPress } = props

    return (<View style={Styles.container}>
        <View style={{ flexDirection: 'row', height: 90 }}>
            <View style={Styles.imageView}>
                <Image source={{ uri: data.primary_image_link }} style={{ width: 120, height: '100%' }} />
            </View>

            <View style={Styles.contentView}>
                <Text style={Styles.titleText}>{data.title}</Text>
                <Text numberOfLines={2} style={Styles.subtitleText}>{data.snippet}</Text>
            </View>
        </View>

        <View style={{ height: 40, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="open-in-browser" size={28} color="#333" onPress={() => openLink(data.link)} />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="star" size={28} color="#333" />
            </View>
        </View>

    </View>)
}

export default NewsCard