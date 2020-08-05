import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        fontFamily: 'nunito-regular',
        marginTop: 10,
        marginBottom: 10
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5
    }
});