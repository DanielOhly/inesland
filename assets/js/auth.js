var config = {
    apiKey: "AIzaSyDTfRaqpHHlLBE24_vEJyDkIgr2tMZZUNA",
    authDomain: "inesland-granimingul.firebaseapp.com",
    databaseURL: "https://inesland-granimingul.firebaseio.com",
    projectId: "inesland-granimingul",
    storageBucket: "",
    messagingSenderId: "630585231717"
};
firebase.initializeApp(config);
//Storing Firebase reference as a variable
const database = firebase.database();
//Storing Authorization protocol as a variable
var defaultAuth = firebase.auth();
//Allowing google sign in for auth




