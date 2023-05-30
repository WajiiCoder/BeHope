import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Onboardingscreen from './Screens/Onboardingscreen';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Chooseprofile from './Screens/Chooseprofile';
import Donardetail from './Screens/Donardetail';
import Forgotpassword from './Screens/Forgotpassword';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from './Screens/DrawerNavigation';
import auth from '@react-native-firebase/auth';
import {AuthContext, Authprovider} from './Screens/Authprovider';

const App = () => {
  const Stack = createStackNavigator();
  const [isfirstLaunch, setIsFirstLaunch] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(AuthContext);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  //Splash screen rendering here
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  //check whether it's the first launch to show the onboarding screen or not
  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if (isfirstLaunch === false) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   });
  // }, []);
  if (initializing) return null;
  console.log('user: ', user);
  return (
    <Authprovider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Onboarding'}
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          {user ? (
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )}
          {/* {isfirstLaunch ? (
            user ? (
              <Stack.Screen name="Drawer" component={DrawerNavigation} />
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            )
          ) : (
            <>
              <Stack.Screen name="Onboarding" component={Onboardingscreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )} */}

          {/* <Stack.Screen name="Choose" component={Chooseprofile} /> */}
          {/* <Stack.Screen
          name="Detail"
          component={Donardetail}
          options={{
            headerShown: true,
            title: 'Donar Detail',
            headerStyle: {
              backgroundColor: '#E81111',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
            },
          }}
        /> */}
          {/* <Stack.Screen
          name="Forgot"
          component={Forgotpassword}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {backgroundColor: '#E81111'},
            headerTintColor: '#fff',
          }}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Authprovider>
  );
};

export default App;
