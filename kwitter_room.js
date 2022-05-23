
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBU1HDTV2zwDqQJEafdw6HYkP90SMLNDJo",
      authDomain: "kwitter-c0a24.firebaseapp.com",
      projectId: "kwitter-c0a24",
      storageBucket: "kwitter-c0a24.appspot.com",
      messagingSenderId: "850844850546",
      appId: "1:850844850546:web:6d1ea5050e183e177165eb"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
