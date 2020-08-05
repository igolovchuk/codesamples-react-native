import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Rating from '../shared/rating';
import ContentWithBackground from '../shared/content-with-background';

export default function ReviewDetails({ navigation }) {
    
    return (
        <ContentWithBackground style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Rating value={navigation.getParam('rating')} />
            </Card>
        </ContentWithBackground>
    );
}