// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
//import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBv6htNrdckKSAr8odHtrE5ME8xu0JlSKM',
  authDomain: 'behope-18d07.firebaseapp.com',
  databaseURL:
    'https://behope-18d07-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'behope-18d07',
  storageBucket: 'behope-18d07.appspot.com',
  messagingSenderId: '478754343048',
  appId: '1:478754343048:web:10154a24a734a9d79b773d',
  measurementId: 'G-KRFVMETP1Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getDatabase(app);
