import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Forgotpassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.header}>
        <Icon name="key" size={80} color={'white'} marginLeft={90} />
        <Text
          style={{
            color: 'white',
            marginTop: 20,
            fontSize: 22,
            fontFamily: 'Poppins-Bold',
          }}>
          Forgot Your password?
        </Text>
      </View>
      <View
        style={{
          borderRadius: 50,
          backgroundColor: '#fff',
          width: 300,
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          marginRight: 15,
        }}>
        <Icon name="envelope" size={18} marginLeft={20} color={'gray'} />
        <TextInput
          placeholder="Type Your Email"
          keyboardType="email-address"
          style={styles.input1}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#E81111',
          padding: 15,
          marginTop: 40,
          borderRadius: 100,
          borderWidth: 4,
          borderColor: '#fff',
          width: 250,
        }}>
        <Text style={styles.Send}>Send Email</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#E81111',
  },
  header: {
    marginTop: 100,
  },
  input1: {
    paddingTop: 13,
    fontSize: 15,
    color: '#000',
    paddingLeft: 10,
    fontFamily: 'Poppins-SemiBold',
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 280,
  },
  Send: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
});

export default Forgotpassword;
