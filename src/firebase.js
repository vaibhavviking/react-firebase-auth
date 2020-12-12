import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
 apiKey: "AIzaSyAHqDG59j8WFsXFBomKLp3h7cp3GRRP7qI",
    authDomain: "fir-auth-4d104.firebaseapp.com",
    projectId: "fir-auth-4d104",
    storageBucket: "fir-auth-4d104.appspot.com",
    messagingSenderId: "1051320511107",
    appId: "1:1051320511107:web:6cb48b4eb4fbd3f70289b6",
    measurementId: "G-K1LDHE4EVW"
})

export const auth = app.auth();

export default app;