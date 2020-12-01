 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyATw5nsqF2ISbuPWnVSRgBB9xLerGhwHIQ",
    authDomain: "biblia-vivia.firebaseapp.com",
    databaseURL: "https://biblia-vivia.firebaseio.com",
    projectId: "biblia-vivia",
    storageBucket: "biblia-vivia.appspot.com",
    messagingSenderId: "958489612952",
    appId: "1:958489612952:web:ef3670d3b05e6adc54b6ed",
    measurementId: "G-V1KMB6W99B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });