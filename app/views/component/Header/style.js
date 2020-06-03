import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    headerView: {
        marginBottom: 20,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 32,
        flex: 1,
        color: '#fff',
        fontWeight: 'bold'
    },
    offlineView: {
        marginLeft: 30,
        backgroundColor: '#f1c40f',
        padding: 5,
        borderRadius: 10
    },
    offlineText: {
        fontSize: 14,
        fontFamily: 'Calibre-Bold'
    },
    networkView: {
        marginLeft: 30,
        backgroundColor: '#e74c3c',
        padding: 5,
        borderRadius: 10
    }
})