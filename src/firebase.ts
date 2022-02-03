import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBLuo5W1mX-jbEoc24O0xJIM5b1AERNJx0',
    authDomain: 'smart-cooker.firebaseapp.com',
    projectId: 'smart-cooker',
    storageBucket: 'smart-cooker.appspot.com',
    messagingSenderId: '407587222659',
    appId: '1:407587222659:web:3343c6a3267aface3217b6',
    measurementId: 'G-Z4YC7YXHTP'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };