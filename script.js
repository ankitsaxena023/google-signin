var container = document.getElementById('container')[0]; 
var img = document.getElementById('img')[0]; 
var getName = document.getElementById('name')[0]; 
var id = document.getElementById('id')[0]; 
var email = document.getElementById('email')[0]; 

function onSuccess(googleUser){
    var profile = googleUser.getBasicProfile();
    img.src = profile.getImageUrl();
    getName.innerHTML = profile.getName();
    id.innerHTML = profile.getId();
    email.innerHTML = profile.getEmail();
    console.log('Access Token: ' + googleUser.getAuthResponse().id_token);
}
function onFailure(error){
    console.log(error);
}
function renderButton(){
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,  
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    })
}

function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function (){
        location.reload();
    });
    auth2.disconnect();
}