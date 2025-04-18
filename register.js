$(document).ready(function() {
    $('#registerBtn').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var age = $('#age').val();
        var dob = $('#dob').val();
        var contact = $('#contact').val();

        // Simple validation
        if (name == '' || email == '' || password == '' || age == '' || dob == '' || contact == '') {
            alert("Please fill all fields.");
            return;
        }

        $.ajax({
            url: 'register.php',
            type: 'POST',
            data: {name: name, email: email, password: password, age: age, dob: dob, contact: contact},
            success: function(response) {
                if (response == "Registration Successful") {
                    alert(response);
                    window.location.href = 'login.html';  // Redirect to login page
                } else {
                    alert(response);  // Show any error messages
                }
            }
        });
    });
});
