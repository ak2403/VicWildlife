import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    CardView: {
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    ImageView: {
        width: 100,
        height: 60
    },
    ContentView: {
        paddingLeft: 10,
        flex: 1
    },
    ContentText: {
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    mapLayout: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
