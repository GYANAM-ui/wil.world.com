username = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = username;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDQ6UDsE2DI7HGxlVxsBjP76YfCUFKLpcU",
    authDomain: "will-world.firebaseapp.com",
    databaseURL: "https://will-world-default-rtdb.firebaseio.com",
    projectId: "will-world",
    storageBucket: "will-world.appspot.com",
    messagingSenderId: "696159810920",
    appId: "1:696159810920:web:1224bd749406ec530652dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = "Tweets";

function send() {
    msg = document.getElementById("msg").value;
    if (msg == "") {
        document.getElementById("msg").placeholder = "Write something not empty..";
    } else {
        firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0,
            dislike: 0
        });

        document.getElementById("msg").value = "";
    }
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;

                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                dislike = message_data['dislike'];
                row = "<h4><img class='profile_img' src='https://img.icons8.com/color/48/000000/reviewer-male--v1.png'/> " + name + "<img title='Verified' class='user_tick' src='https://img.icons8.com/color/48/000000/verified-account.png'></h4><h4 class='message_h4'>Tweet: " + message + "</h4><button class='btn btn-info' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>" + like + "</span></button> <button class='btn btn-warning' id='" + firebase_message_id + "' value='" + dislike + "' onclick='DisLike();'><span class='glyphicon glyphicon-thumbs-down'>" + dislike + "</span></button><hr>";
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}

getData();

function updateLike(message_id) {
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    likes_in_number = Number(likes) + 1;
    console.log(likes_in_number);

    firebase.database().ref(room_name).child(message_id).update({
        like: likes_in_number
    });

}

function DisLike(message_id) {
    button__id = message_id;
    dislikes = document.getElementById("DisLike").value;
    dislikes_in_number = Number(dislikes) + 1;
    console.log(dislikes_in_number);

    firebase.database().ref(room_name).child(message_id).update({
        dislike: dislikes_in_number
    });

}

function logout() {
    localStorage.removeItem("username");
    window.location.replace("index.html");
}