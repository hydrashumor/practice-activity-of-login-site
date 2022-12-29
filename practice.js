var firebaseConfig = {
    apiKey: "AIzaSyBjdt3HhRyypfE7KWFkmBftrdkQD0htMCI",
    authDomain: "kwitter-708cd.firebaseapp.com",
    databaseURL: "https://kwitter-708cd-default-rtdb.firebaseio.com",
    projectId: "kwitter-708cd",
    storageBucket: "kwitter-708cd.appspot.com",
    messagingSenderId: "218356705674",
    appId: "1:218356705674:web:e93434511deba762930073"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
   purpose : "adding user"
});
}
