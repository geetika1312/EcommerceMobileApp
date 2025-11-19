import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from "./src/screens/splash/index";
import SigninScreen from "./src/screens/signin/index";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen 
            name={'Splash'} 
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <stack.Screen 
            name={'Signin'} 
            component={SigninScreen}
            options={{headerShown: false}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
