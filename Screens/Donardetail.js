import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {SelectList} from 'react-native-dropdown-select-list';
import {ref, set} from 'firebase/database';
import {db} from '../firebase';

const Donardetail = () => {
  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [contact, setContact] = useState('');

  const Create = () => {
    set(ref(db, 'Donors/' + name), {
      Username: name,
      BloodGroup: selectedValue,
      Location: selectedLocation,
      Contact: contact,
    })
      .then(() => {
        alert('data submitted');
      })
      .catch(error => {
        alert(error);
      });
  };
  const handlePickerChange = value => {
    setSelectedValue(value);
  };

  // const data = [
  //   {key: '1', value: 'A+'},
  //   {key: '2', value: 'A-'},
  //   {key: '3', value: 'B+'},
  //   {key: '4', value: 'B-'},
  //   {key: '5', value: 'O+'},
  //   {key: '6', value: 'O-'},
  //   {key: '7', value: 'AB+'},
  //   {key: '8', value: 'AB-'},
  // ];
  // const Data = [
  //   {key: '1', value: 'Karachi'},
  //   {key: '2', value: 'Lahore'},
  //   {key: '3', value: 'Kohat'},
  //   {key: '4', value: 'Peshawar'},
  //   {key: '5', value: 'Islamabad'},
  // ];

  return (
    <ScrollView style={style.mainContainer}>
      <View style={style.input0}>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontFamily: 'Poppins-Semibold',
            marginLeft: 12,
            marginBottom: 10,
          }}>
          User Name
        </Text>
        <TextInput
          value={name}
          onChangeText={name => {
            setName(name);
          }}
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
            fontFamily: 'Poppins-Regular',
            marginLeft: 12,
            marginBottom: 10,
            fontFamily: 'Poppins-Semibold',
          }}>
          Select Blood Group
        </Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={value => handlePickerChange(value)}>
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B" value="B" />
        </Picker>

        {/* <SelectList
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
            fontFamily: 'Poppins-Regular',
          }}
          placeholder="Search"
          maxHeight={50}
        /> */}
      </View>

      <View style={style.input2}>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontFamily: 'Poppins-Semibold',
            marginLeft: 12,
            marginBottom: 10,
            marginTop: 13,
          }}>
          Location
        </Text>
        <TextInput
          value={selectedLocation}
          onChangeText={selectedLocation => {
            setSelectedLocation(selectedLocation);
          }}
          placeholder="Enter Your City"
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

      {/* <SelectList
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
        /> */}

      <View style={style.input3}>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontFamily: 'Poppins-Semibold',
            marginLeft: 15,
            marginBottom: 10,
          }}>
          Contact
        </Text>
        <TextInput
          placeholder="Enter Phone number"
          keyboardType="phone-pad"
          value={contact}
          onChangeText={contact => {
            setContact(contact);
          }}
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

      <View style={{alignItems: 'center', marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => Create()}
          style={{
            backgroundColor: '#E81111',
            padding: 15,
            marginTop: 30,
            borderRadius: 10,
            width: 285,
            height: 60,
          }}>
          <Text style={style.save}>SAVE</Text>
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
    marginTop: 55,
  },
  input1: {
    justifyContent: 'center',
    paddingLeft: 20,
    marginRight: 15,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
  input2: {
    justifyContent: 'center',
    paddingLeft: 20,
    marginRight: 10,
    fontFamily: 'Poppins-Regular',
  },
  input3: {
    justifyContent: 'center',
    paddingLeft: 20,
    marginRight: 15,
    marginTop: 12,
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  save: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
});
export default Donardetail;
