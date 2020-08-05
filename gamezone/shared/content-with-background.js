import React from 'react';
import { ImageBackground } from 'react-native';

export default function ContentWithBackground(props) {
    
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={props.style}>   
                { props.children }
        </ImageBackground>
    );
}
