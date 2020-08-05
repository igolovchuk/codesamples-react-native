import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import ContentWithBackground from '../shared/content-with-background';

export default function About() {
    
    return (
        <ContentWithBackground style={globalStyles.container}>
            <Text>About screen</Text>
        </ContentWithBackground>
    );
}