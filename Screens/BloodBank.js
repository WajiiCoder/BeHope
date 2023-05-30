import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const BloodBank = () => {
  const org = [
    {
      id: '1',
      Name: 'Pakistan Blood Bank',
      Address: 'Kohat',
      Contact: '03151433499',
    },
    {
      id: '2',
      Name: 'Ali Zaib Foundation',
      Address: 'Kohat',
      Contact: '0339498881',
    },
    {
      id: '3',
      Name: 'Fatima Foundation',
      Address: 'Karachi',
      Contact: '03139901813',
    },
    {
      id: '4',
      Name: 'Hussaini Blood Bank',
      Address: 'Kohat',
      Contact: '0315438989',
    },
  ];
  itemSeparator = () => {
    return <View style={styles.separator}></View>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'red'} hidden={true} />
      <FlatList
        style={styles.listStyle}
        ItemSeparatorComponent={itemSeparator}
        data={org}
        renderItem={({item}) => (
          <View style={styles.listcontainer}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
              }}>
              <Image
                source={require('../assets/bloodlogo1.png')}
                style={{
                  marginLeft: 260,
                  marginTop: 5,
                  width: 65,
                  height: 90,
                }}
              />
            </View>

            <View style={{position: 'absolute', top: 50}}>
              <Text style={styles.textStyle}>Name : {item.Name}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
              }}>
              <Icon
                name="user"
                size={15}
                marginLeft={15}
                height={80}
                marginTop={-7}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Icon
                name="phone"
                size={15}
                marginLeft={15}
                marginTop={53}
                height={15}
              />
            </View>
            <View style={{position: 'absolute', top: 80}}>
              <Text style={styles.textStyle}>Address : {item.Address}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Icon
                name="map-marker"
                size={15}
                marginLeft={15}
                marginTop={-44}
                height={50}
              />
            </View>
            <View style={{position: 'absolute', top: 110}}>
              <Text style={styles.textStyle}>Contact : {item.Contact}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E81111',
    height: '100%',
  },
  textStyle: {
    width: '100%',
    fontSize: 15,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    paddingLeft: 35,
    paddingBottom: 1,
  },
  textStyle1: {
    width: '100%',
    fontSize: 17,
    color: '#000',
    fontFamily: 'Poppins-Bold',
    paddingLeft: 45,
    paddingBottom: 1,
  },
  listStyle: {
    paddingTop: 5,
    width: '100%',
    marginLeft: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#fff',
    borderBottomColor: 'transparent',
  },
  separator: {
    width: '100%',
    backgroundColor: 'gray',
    padding: 1,
  },
  listcontainer: {
    flex: 1,
    borderRadius: 10,
    paddingBottom: 150,
    backgroundColor: '#fff',
    width: '100%',
    height: 175,
    fontFamily: 'Poppins-Bold',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.78,
    elevation: 10,
  },
});

export default BloodBank;
