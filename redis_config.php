<?php
require 'vendor/autoload.php'; // Include the Redis library (predis)

use Predis\Client;

$redis = new Client([
    'scheme' => 'tcp',
    'host'   => '127.0.0.1',
    'port'   => 6379,
]);

try {
    $redis->ping();
} catch (Exception $e) {
    die("Redis connection failed: " . $e->getMessage());
}
?>
