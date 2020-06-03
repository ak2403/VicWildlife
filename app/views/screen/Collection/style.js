import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    flatlistHeader: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10
    },
    Card: {
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius: 5,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    cardTextView: {
        flexDirection: 'row',
        marginBottom: 5
    },
    cardText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    cardAnswer: {
        flexWrap: 'wrap',
        flex: 1
    },
    submitButton: {
        backgroundColor: '#0984e3',
        color: '#fff',
        marginTop: 10,
        borderRadius: 5
    },
    smokeView: {
        flex: 1, 
        justifyContent: 'center', 
        alignContent: 'center'
    },
    smokeText: {
        padding: 50,
        lineHeight: 30,
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Calibre',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 5,
        textAlign: 'center'
    },
    lightTabStyle: {
        backgroundColor: '#333',
        borderColor: '#000'
    },
    activeLightTab: {
        backgroundColor: '#e0e0e0',
    },
    lightTextStyle: {
        color: '#fff',
        fontSize: 16
    },
    activeTextStyle: {
        color: '#000',
        fontSize: 16
    },
    contentLayer: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 10
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
})
