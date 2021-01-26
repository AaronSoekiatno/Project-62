import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAccU1q-cAnKQKm-0umtHbJ77KmvXgjO6Q',
  authDomain: 'school-attendance-project60.firebaseapp.com',
  databaseURL:
    'https://school-attendance-project60-default-rtdb.firebaseio.com',
  projectId: 'school-attendance-project60',
  storageBucket: 'school-attendance-project60.appspot.com',
  messagingSenderId: '226946003250',
  appId: '1:226946003250:web:4945818d5792805bab272b',
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
