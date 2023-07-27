// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAwKaxyhepISRXI9BTgIT-JyrIcomOznc8',
	authDomain: 'its-box.firebaseapp.com',
	projectId: 'its-box',
	storageBucket: 'its-box.appspot.com',
	messagingSenderId: '564967741711',
	appId: '1:564967741711:web:9f88ec504cdd94fe51467a',
	measurementId: 'G-Z62P3SLRSQ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
