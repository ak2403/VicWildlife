import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    rootLayout: {
        flex: 1,
        position: 'relative',
        flexDirection: 'column'
    },
    mapLayout: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    contentLayout: {
        height: 150,
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50
    },
    ContentContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        width: '90%'
    },
    closeLayout: {
        width: 30,
        height: 30,
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4685A',
        borderRadius: 30
    },
    locationTitle: {
        fontSize: 24,
        flex: 0.9,
        fontFamily: 'Calibre-Bold'
    },
    locationAddressText: {
        fontSize: 18,
        fontFamily: 'Calibre'
    },
    phoneText: {
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: 'Calibre'
    }
});

export default Styles