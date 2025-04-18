// Registration
$("#registerForm").submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'register.php',
        method: 'POST',
        contentType: "application/json",
        data: JSON.stringify({
            username: $("#username").val(),
            password: $("#password").val()
        }),
        success: function(response){
            if(response.status == "success"){
                alert("Registration successful!");
                window.location.href = "login.html";
            } else {
                alert(response.message);
            }
        }
    });
});

// Login
$("#loginForm").submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'login.php',
        method: 'POST',
        contentType: "application/json",
        data: JSON.stringify({
            username: $("#username").val(),
            password: $("#password").val()
        }),
        success: function(response){
            if(response.status == "success"){
                localStorage.setItem("user_id", response.user_id);
                window.location.href = "profile.html";
            } else {
                alert(response.message);
            }
        }
    });
});

// Profile Load
$(document).ready(function(){
    if(window.location.pathname.includes('profile.html')){
        var user_id = localStorage.getItem("user_id");
        if(!user_id){
            window.location.href = "login.html";
        }
        $.ajax({
            url: 'profile.php',
            method: 'POST',
            contentType: "application/json",
            data: JSON.stringify({ user_id: user_id }),
            success: function(response){
                if(response.status == "success"){
                    $("#username").val(response.data.username);
                    $("#age").val(response.data.age);
                    $("#dob").val(response.data.dob);
                    $("#contact").val(response.data.contact);
                }
            }
        });
    }
});

// Profile Update
$("#profileForm").submit(function(e){
    e.preventDefault();
    var user_id = localStorage.getItem("user_id");
    $.ajax({
        url: 'update_profile.php',
        method: 'POST',
        contentType: "application/json",
        data: JSON.stringify({
            user_id: user_id,
            age: $("#age").val(),
            dob: $("#dob").val(),
            contact: $("#contact").val()
        }),
        success: function(response){
            if(response.status == "success"){
                alert("Profile updated!");
            } else {
                alert(response.message);
            }
        }
    });
});
