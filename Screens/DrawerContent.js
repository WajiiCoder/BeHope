import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './Authprovider';

const DrawerContent = props => {
  const {logout} = useContext(AuthContext);

  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#fff'}}>
        <ImageBackground
          source={require('../assets/redback1.jpg')}
          style={{paddingTop: 20}}>
          <Image
            source={require('../assets/user-profile.png')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginLeft: 20,
              borderWidth: 3,
              borderColor: '#fff',
            }}
          />
          <Text
            style={{
              color: '#fff',
              paddingLeft: 12,
              fontSize: 18,
              fontFamily: 'Poppins-Bold',
            }}>
            User name
          </Text>
          <Text
            style={{
              color: '#fff',
              paddingLeft: 21,
              fontFamily: 'Poppins-Regular',
              marginBottom: 10,
              fontSize: 12,
              fontStyle: 'italic',
            }}>
            Email Address
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="share-variant-outline" size={22} color={'#000'} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                marginLeft: 5,
                marginBottom: 4,
              }}>
              Tell a Freind
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => logout()}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="exit-to-app" size={22} color={'#000'} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                marginLeft: 5,
                marginBottom: 4,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DrawerContent;
