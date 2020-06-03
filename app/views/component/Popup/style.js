import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row', 
        flex: 1,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        padding: 20
    },
    popupContainer: {
        backgroundColor: 'rgb(255,255,255)',
        flex: 1,
        borderRadius: 5,
        padding: 10
    }
});

export default styles