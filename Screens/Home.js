import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const users = [
    {
      id: '1',
      DONAR: 'DONAR',
      Username: 'Wajahat Noor',
      bloodGroup: 'B+',
      Location: 'Kohat',
      Contact: '03151433343',
    },
    {
      id: '2',
      DONAR: 'DONAR',
      Username: 'Tehseen',
      bloodGroup: 'A',
      Location: 'Kohat',
      Contact: '0339498881',
    },
    {
      id: '3',
      DONAR: 'DONAR',
      Username: 'Fahad',
      bloodGroup: 'A+',
      Location: 'Karachi',
      Contact: '03139901813',
    },
    {
      id: '4',
      DONAR: 'DONAR',
      Username: 'Hadi',
      bloodGroup: 'B+',
      Location: 'Kohat',
      Contact: '0315438989',
    },
    {
      id: '5',
      DONAR: 'DONAR',
      Username: 'Rizwan',
      bloodGroup: 'AB+',
      Location: 'Islamabad',
      Contact: '0333782996',
    },
  ];

  itemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'red'} hidden={true} />
      <View>
        <FlatList
          style={styles.listStyle}
          ItemSeparatorComponent={itemSeparator}
          data={users}
          renderItem={({item}) => (
            <View style={styles.listcontainer}>
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: 30,
                  marginLeft: 25,
                }}>
                <Icon
                  name="user-circle"
                  size={70}
                  marginLeft={240}
                  height={80}
                  width={100}
                  marginTop={5}
                />
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
              <View style={{position: 'absolute', top: 50}}>
                <Text style={styles.textStyle}>Name : {item.Username}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  name="plus-square"
                  size={15}
                  marginLeft={15}
                  marginTop={86}
                  height={14}
                />
              </View>
              <View style={{position: 'absolute', top: 140, left: -10}}>
                <Text style={styles.textStyle2}>
                  Blood Group :{item.bloodGroup}
                </Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 15,
                }}>
                <Text style={styles.textStyle1}>{item.DONAR}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  name="map-marker"
                  size={15}
                  marginLeft={15}
                  marginTop={-77}
                  height={15}
                />
              </View>
              <View style={{position: 'absolute', top: 80}}>
                <Text style={styles.textStyle}>Location : {item.Location}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  name="phone"
                  size={15}
                  marginLeft={15}
                  marginTop={-47}
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
      </View>
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
  textStyle2: {
    width: '100%',
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-Semibold',
    paddingLeft: 50,
    paddingBottom: 1,
  },
  listStyle: {
    paddingTop: 20,
    width: '105%',
    backgroundColor: '#fff',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#fff',
    borderBottomColor: 'transparent',
  },
  separator: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 5,
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
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.78,
    elevation: 20,
  },
});

export default Home;
