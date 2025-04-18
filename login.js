$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission

        var email = $('#loginEmail').val();
        var password = $('#loginPassword').val();

        // Sending AJAX request to validate login
        $.ajax({
            url: 'login.php', // Path to login PHP file
            type: 'POST',
            data: { email: email, password: password },
            success: function(response) {
                if (response === 'Login Successful') {
                    // Redirect to profile page on successful login
                    alert('Login Successful');
                    window.location.href = 'profile.php'; // Redirect to profile page
                } else {
                    alert(response); // Show error message
                }
            },
            error: function(xhr, status, error) {
                console.log("AJAX Error: " + status + ": " + error);
                alert("Error occurred during login.");
            }
        });
    });
});
