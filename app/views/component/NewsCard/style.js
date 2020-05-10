import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        width: '100%',
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 140
    },
    imageView: {
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView: {
        marginLeft: 'auto',
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
    },
    titleText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold'
    },
    subtitleText: {
        fontSize: 12,
        color: '#333'
    }
});

export default styles