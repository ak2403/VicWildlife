import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    CardContainer: {
        flexDirection: 'column', 
        width: '100%',
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 'auto'
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
        fontSize: 18,
        color: '#333',
        fontFamily: 'Calibre-Bold'
    },
    subtitleText: {
        fontSize: 18,
        color: '#333',
        fontFamily: 'Calibre'
    },
    contentText: {
        fontSize: 12,
        fontFamily: 'Calibre'
    },
    buttonLayer: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#3498db',
        height: 30,
        borderRadius: 5,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Calibre-Bold'
    }
})

export default Styles