
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBC07HiIq7wUKCKAEMMiE4iNqNhvVU7Zto",
      authDomain: "lets-chat-6c850.firebaseapp.com",
      databaseURL: "https://lets-chat-6c850-default-rtdb.firebaseio.com",
      projectId: "lets-chat-6c850",
      storageBucket: "lets-chat-6c850.appspot.com",
      messagingSenderId: "225438600531",
      appId: "1:225438600531:web:ee1e4bdf3dd1831b39e5a6",
      measurementId: "G-6RN2NQVB0S"
    };
    
   firebase.initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
