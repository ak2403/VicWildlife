import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
    locationLayout: {
        height: 140,
        width: 300,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginRight: 15,
        padding: 10,
        shadowColor: "#2f354b",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    headerText: {
        fontSize: 16,
        color: '#2f354b',
        fontWeight: 'bold',
        marginBottom: 10
    },
    contentText: {
        fontSize: 14,
        color: '#2f354b'
    },
    statusText: {
        fontSize: 12,
        color: '#2f354b'
    },
    statusGreen: {
        alignSelf: 'flex-start',
        marginTop: 10,
        backgroundColor: '#2ecc71',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 10
    },
    statusRed: {
        alignSelf: 'flex-start',
        marginTop: 10,
        backgroundColor: '#e74c3c',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 10
    },
    iconView: {
        position: 'absolute',
        // width: 10,
        // height: 10,
        right: 10,
        bottom: 10
    }
});

const CardComponent = props => {
    let { data } = props
    return (
        <View elevation={5} style={styles.locationLayout}>
            <Text style={styles.headerText}>{data.name}</Text>
            <Text style={styles.contentText}>{data.formatted_address}</Text>
            <View style={styles[data.opening_hours.open_now ? `statusGreen` : `statusRed`]}>
                <Text style={styles.statusText}>{data.opening_hours.open_now ? `Open` : `Closed`}</Text>
            </View>

            <View style={styles.iconView}>
                <Icon name="bookmark" color="#e0e0e0" size={20} onPress={() => props.bookmarkCard(data)} />
            </View>
        </View>
    )
}

export default CardComponent