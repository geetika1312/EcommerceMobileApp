import { View, Image, StatusBar, Text } from 'react-native';
import React from 'react';
import RoundButtonComp from '../../components/RoundButtonComp';
import FullRoundButtonComp from '../../components/FullRoundButtonComp';
import { _signInWithGoogle } from '../../config/firebase/GoogleSignin';
import {axiosClient} from '../../config/api';
import {SIGN_IN} from '../../config/api';
import {_storeIntoAsyncStorage} from '../../config/asyncStorage';

const imageSigninBg = require('../../assests/signinBg.jpg');
const imageFacebookBg = require('../../assests/facebook.png');
const imageGoogleBg = require('../../assests/google.png');
const imageLinkedinBg = require('../../assests/linkedin.png');


export default function SigninScreen({ navigation }) {

  const [loading, setLoading] = React.useState(false);

  async function _sign_in_api(googleData) {
    console.log('Signed in with Google!', googleData.uid);
    setLoading(true);
    const apiParams = {
      loginSource: 'google',
      sid: googleData.uid,
      name: googleData.displayName,
      email: googleData.email,
      profileImage: googleData.photoURL,
      fcmToken: 'fcm_110220'
    }
    const {data, status} = await axiosClient.post(SIGN_IN, apiParams)
    setLoading(false);
    if(status == 200){
      _storeIntoAsyncStorage("user", JSON.stringify(data))
      navigation.navigate('Welcome');
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#f6f5f3" barStyle="dark-content" />

      <View style={{ flex: 0.5 }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
          source={imageSigninBg}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#f6f5f3',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold'
          }}
        >Hello</Text>
        <Text
          style={{
            textAlign: 'center',
          }}
        >Welcome to our Ecommerece App</Text>
        <View style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
          gap: 16
        }}>
          <RoundButtonComp label={'Login'} width='120' />
          <RoundButtonComp label={'Sign Up'} border={'true'} onPress={() => navigation.navigate('SignUp')} width='120' />
        </View>
      </View>
      <View style={{
        marginTop: 20,
        paddingBottom: 20,
      }}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 20
          }}
        >Or via social media account</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: 16,
            marginTop: 15
          }}
        >
          <FullRoundButtonComp
            image={imageGoogleBg}
            bg={'#e54545'}
            onPress={() => _signInWithGoogle().then((data) => {
              _sign_in_api(data);
            })}
          />

          <FullRoundButtonComp
            image={imageFacebookBg}
            bg={'#2d75e8'}
            onPress={() => googleSignIn()}
          />
          <FullRoundButtonComp image={imageLinkedinBg} bg={'#e54545'} />
        </View>
      </View>
    </View>
  );
}
