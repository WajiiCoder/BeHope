import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Blood from '../assets/Blood.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {enableLayoutAnimations} from 'react-native-reanimated';
import {AuthContext} from './Authprovider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidePassword, setHidePassword] = useState(true);
  const {login} = useContext(AuthContext);

  return (
    <SafeAreaView style={style.maincontainer}>
      <StatusBar hidden={true} />
      <View style={style.maincontainer1}>
        <View style={style.container}>
          <Blood width={80} height={80} />
          <Text style={style.subheader}>Sign in to continue</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: '#fff',
          borderRadius: 50,
          backgroundColor: '#fff',
        }}>
        <TextInput
          placeholder="Email ID (Required)"
          style={style.input1}
          keyboardType="email-address"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: '#fff',
          borderRadius: 50,
          backgroundColor: '#fff',
        }}>
        <TextInput
          placeholder="Password (Required)"
          style={style.input2}
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <Icon
          name={hidePassword ? 'eye-slash' : 'eye'}
          size={20}
          color="gray"
          marginTop={12}
          marginLeft={12}
          onPress={() => setHidePassword(!hidePassword)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Forgot');
        }}>
        <Text
          style={{
            color: 'blue',
            marginLeft: 200,
            fontWeight: '600',
            fontSize: 15,
            fontFamily: 'Poppins-ExtraBoldItalic',
            marginTop: 5,
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => login(email, password)}
        style={{
          backgroundColor: '#E81111',
          padding: 15,
          marginTop: 30,
          borderRadius: 10,
          width: 285,
        }}>
        <Text style={style.login1}>Login</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: '#000',
          fontSize: 16,
          textAlign: 'center',
          paddingLeft: 13,
          marginBottom: 10,
          fontStyle: 'italic',
          marginTop: 10,
        }}>
        ________________ or _________________
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderWidth: 2,
          borderColor: '#E81111',
          padding: 15,
          margin: 10,
          borderRadius: 10,
          width: 285,
          marginLeft: 18,
          marginBottom: 10,
        }}>
        <Text style={style.login2}>Sign in with Google</Text>
      </TouchableOpacity>

      <View style={style.container2}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              fontFamily: 'Poppins-ExtraBoldItalic',
              fontSize: 15,
              color: 'blue',
              marginLeft: 5,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
        <Text
          style={{color: '#000', fontSize: 15, fontFamily: 'Poppins-Regular'}}>
          Don't Have Account?
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  maincontainer1: {
    alignItems: 'center',
    transform: [{scaleX: 1}],
    borderBottomEndRadius: 1000,
    backgroundColor: 'darkred',
    width: 450,
    height: 220,
  },
  container: {
    marginTop: 60,
    alignItems: 'center',
  },

  subheader: {
    color: '#fff',
    fontSize: 22,
    marginTop: 15,
    fontFamily: 'Poppins-Bold',
  },
  input1: {
    paddingTop: 10,
    fontSize: 15,
    width: 320,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 10,
  },
  input2: {
    paddingTop: 10,
    fontSize: 15,
    width: 290,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 10,
  },
  login1: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  login2: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 18,
    color: '#E81111',
    fontFamily: 'Poppins-Regular',
  },

  container2: {
    flexDirection: 'row-reverse',
    marginRight: 15,
    marginTop: 30,
  },
});
export default Login;
