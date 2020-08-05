import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Menu({ navigation }) {
    
    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.menu}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    menu:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        marginLeft: 20
    }
});