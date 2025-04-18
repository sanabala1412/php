<?php
// db.php

$servername = "localhost"; // or your host (e.g., localhost or an IP address)
$username = "root";        // Change this if you're not using the default root
$password = "";            // Default password is empty for root; change it if you've set one
$dbname = "user_management";        // Name of the database you're using (change as needed)

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
