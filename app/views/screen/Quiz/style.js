import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    controllerView: {
        flex: 1,
        padding: 50
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4685A',
        borderRadius: 30
    },
    contentView: {
        marginTop: 70
    },
    headerTitle: {
        fontFamily: 'Calibre-Bold',
        fontSize: 28,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 20
    },
    dropdownView: {
        width: '100%',
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 30
    }
})