import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const AboutScreen = () => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 20}}>
            <Image
              source={require('../assets/ic_launcher.png')}
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderRadius: 100,
                borderColor: '#fff',
              }}
            />
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Poppins-Regular',
                marginHorizontal: 10,
                color: '#fff',
                marginTop: 7,
              }}>
              BE HOPE MOBILE
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontFamily: 'Poppins-Bold',
              }}>
              Blood Donation Application
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'Poppins-Regular',
            paddingTop: 40,
            paddingLeft: 25,
            lineHeight: 50,

            color: '#E81111',
          }}>
          Be Hope Mobile App enables all Receipent to connect with their matches
          donors near to them locally!
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            paddingLeft: 25,
            paddingRight: 10,
          }}>
          Be Hope Mobile App is a widely available mobile app for any Receipent
          or Blood Seeker to search their relevant blood donor easily at one
          click and for all blood donors around locally to donate blood easily.
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Poppins-Regular',
            paddingTop: 20,
            paddingLeft: 25,
            lineHeight: 40,

            color: '#E81111',
          }}>
          The Right Type, Right On Time
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            paddingLeft: 25,
            paddingRight: 10,
          }}>
          Blood Donor Mobile Pro is designed to help you collect the right blood
          products when you need them by better communicating with
          donors.Depending on the features you select,Blood Donor Mobile can: •
          To provide a reliable platform to connect local blood donor with
          patient.{' '}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            paddingLeft: 50,
            paddingRight: 10,
            flexDirection: 'column',
          }}>
          • To provide a reliable platform to enable blood seeker to connect
          with local blood donor easily.
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            paddingLeft: 50,
            paddingRight: 10,
            flexDirection: 'column',
          }}>
          • To reduce the time consumption and wastage of blood donor between
          Receipent and Blood Donor.
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            paddingLeft: 50,
            paddingRight: 10,
            flexDirection: 'column',
          }}>
          • The Receipent can search blood and their relevant location based on
          that result can find local Donor easily.
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            paddingLeft: 50,
            paddingRight: 10,
            flexDirection: 'column',
          }}>
          • To get fresh blood at a time..
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            paddingLeft: 50,
            paddingRight: 10,
            flexDirection: 'column',
          }}>
          • keeping preference of Donor health Once Donar Donate Blood the
          Reminder option remind to Donor that now you cannot donate to
          individual for 3 months duration.
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Poppins-Regular',
            paddingTop: 20,
            paddingLeft: 25,
            lineHeight: 40,

            color: '#E81111',
          }}>
          Free To Try
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            paddingLeft: 25,
            paddingRight: 10,
            flexDirection: 'column',
          }}>
          Blood Donor Mobile Plus is free for blood donors in the Google Play
          Store.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 180,
    backgroundColor: '#E81111',
  },
  content: {
    flex: 1,
  },
});
