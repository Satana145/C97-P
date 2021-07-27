
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
username=localStorage.getItem("username");
document.getElementById("welcomeusername").innerHTML="Welcome "+username+"!!"; 

function addroom() {
      roomname=document.getElementById("addroom").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",roomname);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='gotoroom(this.id)'>"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function gotoroom(name) {
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="Glitter_page.html";
}
