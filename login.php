<?php
// login.php
include 'db_config.php'; // Database connection file

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare and execute the query
    $stmt = $conn->prepare("SELECT id, email, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email); // "s" is for string type
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $email_db, $password_db);
        $stmt->fetch();
        
        // Verify the password
        if (password_verify($password, $password_db)) {
            // Password is correct, login successful
            echo 'Login Successful';
            // Here you can store user data in Redis or localStorage (depending on your needs)
        } else {
            // Invalid password
            echo 'Invalid email or password';
        }
    } else {
        echo 'No user found with this email';
    }
    
    $stmt->close();
    $conn->close();
}
?>
