import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    checkboxOptionsLayout: { 
        width: '80%', 
        flexDirection: 'row',
        backgroundColor: 'rgba(52, 52, 52, 0.7)',
        borderColor: '#7f8c8d',
        borderWidth: 1,
        borderRadius: 5,
        height: 100, 
        paddingTop: 15, 
        paddingBottom: 15, 
        paddingLeft: 5, 
        paddingRight: 10,
        marginBottom: 20
    },
    checkboxLayout: { 
        width: '20%', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    CheckboxView: {
        width: 20, 
        height: 20, 
        borderColor: "#C4E538",
        borderWidth: 5
    },
    selectedCheckboxView: { 
        width: 20, 
        height: 20, 
        backgroundColor: "#C4E538" 
    },
    optionTitleText: { 
        color: '#fff', 
        fontSize: 24, 
        fontFamily: 'Calibre-Bold' 
    },
    optionSubtitleText: { 
        color: '#fff', 
        fontSize: 14, 
        fontFamily: 'Calibre-light' 
    },
    selected: {
        backgroundColor: 'rgba(196, 229, 56, 0.4)',
    }
});

export default Styles