import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FlatButton({ title, onSubmit }) {
    
    return (
        <TouchableOpacity onPress={onSubmit}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: 'maroon'
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 16
    }
});