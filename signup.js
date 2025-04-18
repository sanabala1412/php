$(document).ready(function() {
    $('#signupForm').submit(function(event) {
        event.preventDefault();  // Prevent form submission

        // Collect form data
        var formData = {
            'username': $('#username').val(),
            'email': $('#email').val(),
            'password': $('#password').val(),
            'age': $('#age').val(),
            'dob': $('#dob').val(),
            'contact': $('#contact').val()
        };

        // AJAX request to signup.php
        $.ajax({
            type: 'POST',
            url: 'signup.php',
            data: formData,
            success: function(response) {
                alert(response);  // Show success message from PHP
            },
            error: function(xhr, status, error) {
                alert("Error: " + error);  // Handle any errors
            }
        });
    });
});
