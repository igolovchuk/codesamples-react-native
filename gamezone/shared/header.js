import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text> 
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
        color: '#333'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
});