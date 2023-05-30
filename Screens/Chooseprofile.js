import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Chooseprofile = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={{alignItems: 'center'}}>
        <Icon name="user" size={80} color={'#ffffff'} marginTop={180} />
      </View>
      <View style={style.header}>
        <Text
          style={{
            fontFamily: 'Poppins-Semibold',
            color: '#fff',
            fontSize: 33,
          }}>
          Choose Profile
        </Text>
      </View>
      <View style={style.btnstyle}>
        <TouchableOpacity
          style={style.btn1}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={style.Profile1}>Become a Donor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn2}
          onPress={() => navigation.navigate('Drawer')}>
          <Text style={style.Profile2}>Become a Receipent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#E81111',
  },
  btnstyle: {
    marginTop: 45,
    alignItems: 'center',
  },
  btn1: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
    width: 285,
    borderWidth: 2,
    borderColor: '#fff',
  },
  Profile1: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  btn2: {
    backgroundColor: '#E81111',
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
    width: 285,
    borderWidth: 2,
    borderColor: '#fff',
  },
  Profile2: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
});

export default Chooseprofile;
