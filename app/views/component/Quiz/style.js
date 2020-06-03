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
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%'
    },
    questionText: {
        fontFamily: 'Calibre-Bold',
        fontSize: 22,
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
        marginTop: 50,
        marginBottom: 50,
        justifyContent: 'space-between',
        flexDirection: 'row'
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
    checkBox: {
        borderRadius: 20,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    showResultText: {
        fontSize: 22, 
        paddingBottom: 10, 
        fontFamily: 'Calibre-Bold',
        textAlign: 'center'
    },
    resultQuestionText: {
        fontFamily: 'Calibre',
        fontSize: 16,
        marginBottom: 10
    },
    buttonView: {
        marginTop: 30
    }
})
