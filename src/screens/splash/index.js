import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
const image = require('../../assests/splashBg.png')

export default function SplashScreen({navigation}) {
    setTimeout(()=>{
        navigation.navigate('Signin')
    },2000);

  return (
    <ImageBackground 
        source={image} 
        style={{
            flex: 1,
            padding: 20
        }} 
        resizeMode={'cover'}
    >
        <Text
            style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold'
            }}
        >Ecommerece App</Text>
    </ImageBackground>
  )
}