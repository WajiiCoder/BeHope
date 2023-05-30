import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker';

const ReminderScreen = () => {
  const [date, setDate] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Birth Date :</Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor: 'gray',
              alignItems: 'flex-start',
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: 'gray',
            },
            dateText: {
              fontSize: 17,
            },
          }}
          onDateChange={date => {
            setDate();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color: '#000',
  },
});
export default ReminderScreen;
