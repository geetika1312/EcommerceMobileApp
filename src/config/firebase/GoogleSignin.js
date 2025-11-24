import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential
} from '@react-native-firebase/auth';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

export async function _signInWithGoogle() {
  try {
    // Ensure device has Google Play Services
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // Trigger Google Sign-In
    const signInResult = await GoogleSignin.signIn();

    // Extract ID token for new + old versions of google-signin
    let idToken = signInResult.data?.idToken || signInResult.idToken;

    if (!idToken) {
      throw new Error('No ID token found');
    }

    // Create Google credentials
    const googleCredential = GoogleAuthProvider.credential(idToken);

    // Firebase Auth instance
    const auth = getAuth();

    // Sign in to Firebase (modular API)
    const userCredential = await signInWithCredential(auth, googleCredential);

    return userCredential.user;

  } catch (error) {
    console.log('🔥 GOOGLE SIGN-IN ERROR:', error);
    return null;
  }
}

