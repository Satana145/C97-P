// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBdy425ctLgClTEJrMCPJnZLIwaGBOXYPQ",
      authDomain: "kwitter2-995d7.firebaseapp.com",
      databaseURL: "https://kwitter2-995d7-default-rtdb.firebaseio.com",
      projectId: "kwitter2-995d7",
      storageBucket: "kwitter2-995d7.appspot.com",
      messagingSenderId: "819795410841",
      appId: "1:819795410841:web:270d3a06b3ef91bb31dd08"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username1=localStorage.getItem("username")
room_name=localStorage.getItem("roomname")

function sendmessage() {
      message=document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name:username1,
            message:message,
           like:0 
      });
      document.getElementById("message").value="";
}







    function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
