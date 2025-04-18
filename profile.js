$(document).ready(function() {
    // Get user data from localStorage
    var user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
        // Redirect to login page if no user session is found
        window.location.href = 'login.html';
    }

    // Pre-fill the profile with stored user info (from localStorage)
    $('#email').val(user.email);  // Just email for now as it was used to login

    $('#updateProfile').click(function() {
        var age = $('#age').val();
        var dob = $('#dob').val();
        var contact = $('#contact').val();

        // Simple validation
        if (age == '' || dob == '' || contact == '') {
            alert("Please fill all fields.");
            return;
        }

        $.ajax({
            url: 'profile.php',
            type: 'POST',
            data: {email: user.email, age: age, dob: dob, contact: contact},
            success: function(response) {
                alert(response);
            }
        });
    });

    // Logout functionality
    $('#logout').click(function() {
        localStorage.removeItem('user');  // Remove the user session from localStorage
        window.location.href = 'login.html';  // Redirect to login page
    });
});
