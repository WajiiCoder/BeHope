import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Blood from '../assets/Blood.svg';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={style.maincontainer}>
      <View style={style.maincontainer1}>
        <View style={style.container}>
          <Blood width={80} height={80} />
          <Text style={style.subheader}>Create New Account </Text>
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
        <TextInput placeholder="Full Name" style={style.input1} />
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: '#fff',
          borderRadius: 50,
          backgroundColor: '#fff',
        }}>
        <TextInput
          placeholder="Email ID (Required)"
          style={style.input2}
          keyboardType="email-address"
        />
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: '#fff',
          borderRadius: 50,
          backgroundColor: '#fff',
        }}>
        <TextInput
          placeholder="Password (Required)"
          style={style.input3}
          secureTextEntry={hidePassword}
        />
        <Icon
          name={hidePassword ? 'eye-slash' : 'eye'}
          size={20}
          color="gray"
          marginTop={12}
          marginRight={12}
          onPress={() => setHidePassword(!hidePassword)}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Choose')}
        style={{
          backgroundColor: '#E81111',
          padding: 15,
          marginTop: 25,
          borderRadius: 10,
          width: 285,
        }}>
        <Text style={style.login1}>Register</Text>
      </TouchableOpacity>
      <Text
        style={{
          color: '#000',
          fontSize: 16,
          textAlign: 'center',
          paddingLeft: 13,
          marginTop: 10,
          fontStyle: 'italic',
        }}>
        ________________ or _________________{' '}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderWidth: 2,
          borderColor: '#E81111',
          padding: 15,
          marginTop: 20,
          borderRadius: 10,
          width: 285,
          marginLeft: 8,
          marginBottom: 10,
        }}>
        <Text style={style.login2}>Continue with Google</Text>
      </TouchableOpacity>

      <View style={style.container2}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontFamily: 'Poppins-ExtraBoldItalic',
              fontSize: 15,
              color: 'blue',
              marginLeft: 5,
            }}>
            Login here
          </Text>
        </TouchableOpacity>

        <Text
          style={{color: '#000', fontSize: 15, fontFamily: 'Poppins-Regular'}}>
          Already Have Account?
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  maincontainer1: {
    alignItems: 'center',
    transform: [{scaleX: 1}],
    borderBottomEndRadius: 1000,
    backgroundColor: 'darkred',
    width: 470,
    height: 250,
  },
  container: {
    marginTop: 90,
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
    width: 310,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 10,
  },
  input2: {
    paddingTop: 10,
    fontSize: 15,
    width: 310,
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  input3: {
    paddingTop: 10,
    fontSize: 15,
    width: 280,
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
    marginRight: 20,
    marginTop: 20,
  },
});

export default Signup;
