import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    introView: {
        flexDirection: "row",
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    introText: {
        fontFamily: 'Calibre',
        textAlign: 'justify',
        fontSize: 14,
        flex: 1,
    },
    contentView: {
        padding: 10, 
        marginTop: 5, 
        marginBottom: 5, 
        borderRadius: 5
    },
    contentText: {
        fontFamily: 'Calibre',
        textAlign: 'justify',
        fontSize: 14,
        flex: 0.95
    },
    lightView: {
        backgroundColor: 'rgba(255,255,255, 0.8)'
    },
    darkView: {
        backgroundColor: 'rgba(52,52,52,0.8)'
    },
    lightTextColor: {
        color: '#333'
    },
    darkTextColor: {
        color: '#fff'
    },
    buttonLayer: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#3498db',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Calibre-Bold'
    },
    headerLayer: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(52,52,52,0.8)",
        marginTop: 5,
        borderRadius: 5
    },
    contentLayer: {
        backgroundColor: "rgba(52,52,52,0.9)",
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
})

export default Styles