<?php
// database configuration parameters
$conn = array(
    'dbname' => 'scrum_online',
    'user' => 'root',
    'password' => 'passwd',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
);

// This is used to create the join link
$host = getenv('HOST', true) ?: "http://scrumpoker.siimp.ee";

$cardSets = [['1', '2', '3', '5', '8', '13', 'lebo ots', '42'],['1', '3', '5', '8']];

// Src tree for documentation linking from page
$src = "https://github.com/Toxantron/scrumonline/tree/master";

// Active ticketing plugins of the page
$plugins = [];

// Configuration for the server side JIRA controller
$jiraConfiguration = [
    'base_url' => '',
    'username' => '',
    'password' => '',
    'project' => '',
    'jql' => '',
];
$conn = array(
    'dbname' => $_ENV["DB_NAME"],
    'user' => $_ENV["DB_USER"],
    'password' => $_ENV["DB_PASS"],
    'host' => $_ENV["DB_HOST"],
    'driver' => 'pdo_mysql',
); 
