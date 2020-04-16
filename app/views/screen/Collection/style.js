import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    headerText: {
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 20
    },
    flatlistHeader: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10
    },
    Card: {
        backgroundColor: '#fff',
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
        backgroundColor: '#0984e3',
        color: '#fff',
        marginTop: 10,
        borderRadius: 5
    }
})
