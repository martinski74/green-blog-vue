// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzeui7QEWa0f8rvYxDS1wLMLaDQe9cpxk',
  authDomain: 'green-blog-vue.firebaseapp.com',
  projectId: 'green-blog-vue',
  storageBucket: 'green-blog-vue.firebasestorage.app',
  messagingSenderId: '686513292362',
  appId: '1:686513292362:web:a13ea08700f65fedd092b3',
  measurementId: 'G-SZN0FPP4KM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
