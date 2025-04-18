<?php
include('db_config.php');

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];

// Hash the password before storing it
$passwordHash = password_hash($password, PASSWORD_BCRYPT);

// Prepare the SQL query to insert data into the users table
$stmt = $conn->prepare("INSERT INTO users (name, email, password, age, dob, contact) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $name, $email, $passwordHash, $age, $dob, $contact);

// Execute the query and check if it was successful
if ($stmt->execute()) {
    echo "Registration Successful";
} else {
    echo "Error: " . $stmt->error;  // Display any errors
}

// Close the prepared statement and connection
$stmt->close();
$conn->close();
?>
