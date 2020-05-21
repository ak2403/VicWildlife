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
        color: '#fff',
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

    },
    submitButton: {
        // backgroundColor: '#0984e3',
        // color: '#fff',
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
    }
})
