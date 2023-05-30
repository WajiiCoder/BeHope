import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

//styling Done button
const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{color: 'white', fontSize: 18}}>Done</Text>
  </TouchableOpacity>
);

//styling skip button
const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{color: 'white', fontSize: 18}}>Skip</Text>
  </TouchableOpacity>
);

//styling next button
const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{color: 'white', fontSize: 18}}>Next</Text>
  </TouchableOpacity>
);

const Onboardingscreen = ({navigation}) => {
  return (
    //onboarding layout
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      titleStyles={{color: 'white', fontSize: 30, fontWeight: 'bold'}}
      subTitleStyles={{color: 'white', fontSize: 20}}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#D8605F',
          image: (
            <Image
              source={require('../assets/bloodlogo1.png')}
              style={{width: 120, height: 165, marginBottom: 30}}
            />
          ),
          title: 'Share Your Case!',
          subtitle:
            'Search the Blood of patient who needs blood and  also who want to participate as a donor',
        },
        {
          backgroundColor: '#D8605F',
          image: (
            <Image
              source={require('../assets/bloodonborad.png')}
              style={{width: 140, height: 150, marginBottom: 30}}
            />
          ),
          title: 'Donate To Others',
          subtitle: 'Donate to individual case in one step',
        },
        {
          backgroundColor: '#D8605F',
          image: (
            <Image
              source={require('../assets/img2.png')}
              style={{width: 250, height: 150, marginBottom: 35, marginTop: 15}}
            />
          ),
          title: 'Track Donors',
          subtitle: 'Search the blood type you need  and reach to the nearest',
        },
      ]}
    />
  );
};

export default Onboardingscreen;
