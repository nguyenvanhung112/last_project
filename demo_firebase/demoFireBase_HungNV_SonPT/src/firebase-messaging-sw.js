importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');
var firebaseConfig = {
  apiKey: 'AIzaSyDV8RZyn7riFw087ES5nA05z4ON5axBO28',
  authDomain: 'test-42050.firebaseapp.com',
  databaseURL: 'https://test-42050-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'test-42050',
  storageBucket: 'test-42050.appspot.com',
  messagingSenderId: '902879698828',
  appId: '1:902879698828:web:2d7346b0c1c599d08540a9',
  measurementId: 'G-XEHPX24EFX'
};
firebase.default.initializeApp(firebaseConfig);

const messaging = firebase.default.messaging();
