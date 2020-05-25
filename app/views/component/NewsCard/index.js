import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'

import Styles from './style'

openLink = link => {
    Linking.canOpenURL(link).then(supported => {
        if (supported) {
            Linking.openURL(link);
        } else {
            
        }
    });
};

const NewsCard = props => {
    let { data, onPress, theme } = props
    
    return (<TouchableOpacity onPress={() => openLink(data.link)}>
    <View style={[Styles.container, theme && {backgroundColor: 'rgba(35,35,39, 0.8)'}]}>
        <View style={{ flexDirection: 'row', height: 'auto' }}>
            <View style={Styles.imageView}>
                <Image source={{ uri: data.primary_image_link }} style={{ width: 120, height: 110 }} />
            </View>

            <View style={Styles.contentView}>
                <Text style={[Styles.titleText, theme && { color: "#dfdde3" }]}>{data.title}</Text>
                <Text numberOfLines={2} style={[Styles.subtitleText, theme && { color: "#dfdde3" }]}>{data.snippet}</Text>
            </View>
        </View>
        <Text style={Styles.dateText}>published on {moment(data.date_published).format("MM-DD-YY, h:mm:ss a")}</Text>
    </View>
    </TouchableOpacity>)
}

export default NewsCard