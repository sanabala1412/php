<?php
include('db_config.php');

$email = $_POST['email'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];

$stmt = $conn->prepare("UPDATE users SET age = ?, dob = ?, contact = ? WHERE email = ?");
$stmt->bind_param("ssss", $age, $dob, $contact, $email);

if ($stmt->execute()) {
    echo "Profile Updated Successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
