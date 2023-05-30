import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import Donardetail from './Donardetail';
import DrawerContent from './DrawerContent';
import ProfileScreen from './ProfileScreen,';
import AboutScreen from './AboutScreen';
import ReminderScreen from './ReminderScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BloodBank from './BloodBank';
import {DrawerActions} from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const DrawerNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: '65%',
        },
        swipeEnabled: false,
        drawerPosition: 'left',
        drawerLabelStyle: {marginLeft: -25, fontWeight: '500'},

        drawerActiveBackgroundColor: '#E81111',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        headerTitleStyle: {
          fontFamily: 'Poppins-Semibold',
        },
        headerStyle: {
          backgroundColor: '#E81111',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Find  Donar',
          headerTitleAlign: 'center',
          drawerIcon: ({focused}) => (
            <Icon
              name="home-outline"
              size={22}
              color={focused ? '#fff' : '#000'}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 15}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name="menu" size={25} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity onPress={() => {}}>
                <Icon name="magnify" size={25} color={'#fff'} marginTop={12} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Profile');
                }}
                style={{marginTop: 5, marginLeft: 15, paddingHorizontal: 5}}>
                <Image
                  source={require('../assets/user-profile.png')}
                  style={{
                    width: 40,
                    height: 40,
                    borderWidth: 3,
                    borderColor: '#fff',
                    borderRadius: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              name="account-outline"
              size={22}
              color={focused ? '#fff' : '#000'}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 15}}
              onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Become a Donor"
        component={Donardetail}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              name="water-plus-outline"
              size={22}
              color={focused ? '#fff' : '#000'}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 15}}
              onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

      <Drawer.Screen
        name="Reminder"
        component={ReminderScreen}
        options={{
          drawerIcon: ({focused}) => (
            <Icon name="reminder" size={22} color={focused ? '#fff' : '#000'} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 15}}
              onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Blood banks"
        component={BloodBank}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              name="blood-bag"
              size={22}
              color={focused ? '#fff' : '#000'}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 15}}
              onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              name="information-outline"
              size={22}
              color={focused ? '#fff' : '#000'}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 15}}
              onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
