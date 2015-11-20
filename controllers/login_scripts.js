/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*these vars are defined here because of lint errors*/
var $, loginHandler, registerHandler, loginResponseHandler, registerResponseHandler, username;

$(document).ready(function () {
    
    $("#login").click(loginHandler);
    $("#register").click(registerHandler);

});

/**
  *This function is called when login button is 
  *pressed
  */
function loginHandler(event) {
    console.log("Login pressed");
    var requestData = {
        
        username: $("#username").val(),
        password: $("#password").val()
    };
    
    localStorage.username = $("#username").val();
    sessionStorage.user = $("#username").val();


    //Send login request to server
    $.ajax({
        
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        data: requestData,
        dataType: 'json'
    
    }).done(loginResponseHandler);
}

/**
  *This function is called when register button is 
  *pressed
  */
function registerHandler(event) {
    console.log("Register handler called");
    var requestData = {

        username: $("#username").val(),
        password: $("#password").val()
    };
    
    //Send login request to server
    $.ajax({
        
        method: 'POST',
        url: 'http://localhost:3000/users/register',
        data: requestData,
        dataType: 'json'
    
    }).done(registerResponseHandler);
}

/**
  *This function is called when register response 
  *arrives in some point of time
  */
function registerResponseHandler(data) {
    
    $("#status").text(data.status);
}


function loginResponseHandler(data) {
    
    //If login status was ok
    if (data.status === "Ok") {
 //Ask browser to load main.html from node server  
        window.location.href = 'http://localhost:3000/main.html';
        
    } else {
        $("#status").text(data.status);
    }
}


