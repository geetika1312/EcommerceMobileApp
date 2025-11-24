import { View, Text, StatusBar } from 'react-native'
import InputFieldComponent from '../../components/InputFieldComponent';
import React from 'react'
import RoundButtonComp from '../../components/RoundButtonComp';

export default function SignUpScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
        <StatusBar backgroundColor={'white'}/>
        <Text
            style={{
                fontSize: 30,
                color: 'black',
                fontWeight: 'bold'
            }}
        >
            SignUp
        </Text>
      <Text>SignUp here</Text>
     <View
        style={{
            flex: 1,
            justifyContent: 'center'
        }}
     >
         <InputFieldComponent placeholder={"email"} keyboardType={'email-address'}/>
         <InputFieldComponent placeholder={"password"} secureTextEntry={true}/>
         <RoundButtonComp label={"SignUp"} marginTop={30}/>
     </View>
    </View>
  )
}