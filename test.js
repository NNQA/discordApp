import firebase from 'firebase/compat/app'
const firebaseConfig = {
    apiKey: "AIzaSyASFx_1auOBPFyAC6hZMtM3fwBRjWdvCPo",
    authDomain: "discordclone-cab14.firebaseapp.com",
    projectId: "discordclone-cab14",
    storageBucket: "discordclone-cab14.appspot.com",
    messagingSenderId: "204451298235",
    appId: "1:204451298235:web:16fa55540dd8639379a29e",
    measurementId: "G-Z6GDE3TXF5"
};
const app = firebase.initializeApp(firebaseConfig);
console.log(1);
const provider = new firebase.auth.GoogleAuthProvider();
console.log(provider);
console.log(1);
console.log(1)