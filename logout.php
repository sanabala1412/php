<?php
header('Content-Type: application/json');
require 'redis_config.php';

try {
    $headers = getallheaders();
    $session_token = $headers['Authorization'];

    if (!$session_token) {
        throw new Exception("Session token is missing");
    }

    $redis->del("user:{$session_token}");

    $response = array("status" => "success", "message" => "Logged out successfully");
    echo json_encode($response);
} catch (Exception $e) {
    $response = array("status" => "error", "message" => $e->getMessage());
    echo json_encode($response);
}
?>
