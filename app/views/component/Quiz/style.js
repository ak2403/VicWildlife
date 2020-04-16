import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    questionsView: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    questionView: {

    },
    questionText: {
        fontSize: 18,
        marginBottom: 10
    },
    optionsView: {
        flexDirection: 'column'
    },
    optionListView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    optionsText: {
        paddingLeft: 30,
        fontSize: 16
    },
    controlView: {
        marginBottom: 50,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    closeIcon: {
        position: 'absolute',
        top: 60,
        left: 30,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4685A',
        borderRadius: 30
    }
})
