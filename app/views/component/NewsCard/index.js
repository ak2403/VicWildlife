import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
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

    return (<TouchableOpacity onPress={() => openLink(data.link)}>
    <View style={Styles.container}>
        <View style={{ flexDirection: 'row', height: 90 }}>
            <View style={Styles.imageView}>
                <Image source={{ uri: data.primary_image_link }} style={{ width: 120, height: '100%' }} />
            </View>

            <View style={Styles.contentView}>
                <Text style={Styles.titleText}>{data.title}</Text>
                <Text numberOfLines={2} style={Styles.subtitleText}>{data.snippet}</Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>)
}

export default NewsCard