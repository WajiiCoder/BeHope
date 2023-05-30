import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert, StyleSheet, Text, View} from 'react-native';

export const AuthContext = createContext();

export const Authprovider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log('login successfull');
            Alert.alert('Login Successfull');
          } catch (error) {
            console.log(error);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            console.log('registered');
            Alert.alert('Registered');
          } catch (error) {
            console.log(error);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// export default Authprovider;

const styles = StyleSheet.create({});
