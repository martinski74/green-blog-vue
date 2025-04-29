import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBDkOw-wNfQfJcslCWoUt0KoS6WcvSL_4k',
  authDomain: 'green-blog-51a21.firebaseapp.com',
  databaseURL:
    'https://green-blog-51a21-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'green-blog-51a21',
  storageBucket: 'green-blog-51a21.firebasestorage.app',
  messagingSenderId: '993612297155',
  appId: '1:993612297155:web:3861d41b5b373d1f3fc376',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
