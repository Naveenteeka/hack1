function onSignIn(googleUser) {
   window.location.href = 'http://www.google.com';
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;//Send the ID token to your server
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    
    
  }
