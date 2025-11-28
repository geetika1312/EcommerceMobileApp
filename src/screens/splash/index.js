import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import { _getFromAsyncStorage } from '../../config/asyncStorage';
const image = require('../../assests/splashBg.png')

export default function SplashScreen({navigation}) {
    setTimeout(()=>{
        checkUser();
        // navigation.replace('Signin')
    },2000);

    async function checkUser(){
        const value = await _getFromAsyncStorage('user');
        if(!value){
            navigation.replace('Signin')
        } else {
            navigation.replace('Welcome')
        }
    }

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