import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyARK_4zu_nxIJKrvAL48w8gU0xGjjRgj8M",
  authDomain: "barter-system-3ced1.firebaseapp.com",
  databaseURL: "https://barter-system-3ced1.firebaseio.com",
  projectId: "barter-system-3ced1",
  storageBucket: "barter-system-3ced1.appspot.com",
  messagingSenderId: "345060742863",
  appId: "1:345060742863:web:f16ec09189cbbaadedc9ba"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
