import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from "./src/screens/splash";
import SigninScreen from "./src/screens/signin";
import SignUpScreen from "./src/screens/signUp";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "596820496882-n510ggktq1ll5m5nlt5c5slft5v4u8s6.apps.googleusercontent.com",
      offlineAccess: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
