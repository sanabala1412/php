<?php
// Database connection code
include('db_config.php');  // Assuming this file contains your DB connection code

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get user input from the form
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);  // Hash password for security
    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $contact = $_POST['contact'];

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO users (username, email, password, age, dob, contact) VALUES (?, ?, ?, ?, ?, ?)");
    
    if ($stmt === false) {
        // Check if the prepare statement failed
        die('MySQL prepare statement failed: ' . $conn->error);
    }

    // Bind parameters to the SQL statement
    $stmt->bind_param("ssssss", $username, $email, $password, $age, $dob, $contact);
    
    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "Registration successful";
    } else {
        // In case of an error, show the error message
        echo "Error: " . $stmt->error;
    }

    // Close the statement and the connection
    $stmt->close();
    $conn->close();
}
?>
