import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAem_PNLSLL9Kw7P8m_ef-Xb04eYZswMjM",
    authDomain: "image-d21db.firebaseapp.com",
    databaseURL: "https://image-d21db.firebaseio.com",
    projectId: "image-d21db",
    storageBucket: "image-d21db.appspot.com",
    messagingSenderId: "770237596161",
    appId: "1:770237596161:web:aa87c8642a1192f9bd3600",
    measurementId: "G-6VFBZV4NN2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase