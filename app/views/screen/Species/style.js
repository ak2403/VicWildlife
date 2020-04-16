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
    CardView: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    ImageView: {
        width: 120,
        height: 80,
        backgroundColor: '#e0e'
    },
    ContentView: {
        paddingLeft: 10
    },
    ContentText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 5
    }
})
