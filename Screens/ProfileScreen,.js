import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const [selected, setSelected] = useState('');

  const data = [
    {key: '1', value: 'A+'},
    {key: '2', value: 'A-'},
    {key: '3', value: 'B+'},
    {key: '4', value: 'B-'},
    {key: '5', value: 'O+'},
    {key: '6', value: 'O-'},
    {key: '7', value: 'AB+'},
    {key: '8', value: 'AB-'},
  ];
  const Data = [
    {key: '1', value: 'Karachi'},
    {key: '2', value: 'Lahore'},
    {key: '3', value: 'Kohat'},
    {key: '4', value: 'Peshawar'},
    {key: '5', value: 'Islamabad'},
  ];

  return (
    <ScrollView style={style.mainContainer}>
      <Icon
        name="user-circle"
        size={100}
        marginHorizontal={140}
        marginTop={40}
        width="100%"
        color={'gray'}
      />
      <View style={style.input0}>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontFamily: 'Poppins-Semibold',
            marginLeft: 12,
          }}>
          User Name
        </Text>
        <TextInput
          placeholder="Enter Full Name"
          style={{
            flexDirection: 'row',
            borderWidth: 3,
            borderColor: '#fff',
            fontSize: 15,
            width: 323,
            borderRadius: 50,
            paddingLeft: 15,
            backgroundColor: '#fff',
            fontFamily: 'Poppins-Regular',
          }}
        />
      </View>
      <View style={style.input1}>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            marginLeft: 12,
            fontFamily: 'Poppins-Semibold',
          }}>
          Select Blood Group
        </Text>
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          boxStyles={{
            borderWidth: 3,
            backgroundColor: '#fff',
            borderRadius: 50,
            borderColor: '#fff',
          }}
          inputStyles={{fontSize: 15, color: 'gray', fontWeight: '400'}}
          dropdownStyles={{backgroundColor: 'gray'}}
          dropdownItemStyles={{marginHorizontal: 10}}
          dropdownTextStyles={{
            color: '#fff',
            fontSize: 15,
            fontFamily: 'Poppins-Semibold',
          }}
          placeholder="Search"
          maxHeight={50}
        />
      </View>

      <View style={style.input2}>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontFamily: 'Poppins-Semibold',
            marginLeft: 12,
          }}>
          Location
        </Text>

        <SelectList
          setSelected={val => setSelected(val)}
          data={Data}
          save="value"
          boxStyles={{
            borderWidth: 3,
            borderRadius: 50,
            backgroundColor: '#fff',
            borderColor: '#fff',
          }}
          inputStyles={{fontSize: 15, color: 'gray'}}
          dropdownStyles={{backgroundColor: 'gray'}}
          dropdownItemStyles={{marginHorizontal: 10}}
          dropdownTextStyles={{
            color: '#fff',
            fontSize: 15,
            fontFamily: 'Poppins-Regular',
          }}
          placeholder="Search"
          maxHeight={50}
        />
      </View>

      <View style={style.input3}>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontFamily: 'Poppins-Semibold',
            marginLeft: 15,
          }}>
          Contact
        </Text>
        <TextInput
          placeholder="Enter Phone number"
          keyboardType="phone-pad"
          style={{
            fontFamily: 'Poppins-Regular',
            flexDirection: 'row',
            borderWidth: 3,
            borderColor: '#fff',
            fontSize: 15,
            width: 323,
            borderRadius: 50,
            paddingLeft: 20,
            backgroundColor: '#fff',
          }}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#E81111',
            padding: 15,
            marginTop: 20,
            borderRadius: 10,
            width: 285,
            height: 60,
          }}>
          <Text style={style.save}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  input0: {
    justifyContent: 'center',
    paddingLeft: 20,
    marginRight: 15,
    marginTop: 30,
  },
  input1: {
    justifyContent: 'center',
    paddingLeft: 20,
    marginRight: 15,
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  input2: {
    justifyContent: 'center',
    paddingLeft: 20,
    marginRight: 15,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 5,
  },
  input3: {
    justifyContent: 'center',
    paddingLeft: 20,
    marginRight: 15,
    marginBottom: 15,
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  save: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
});
export default ProfileScreen;
