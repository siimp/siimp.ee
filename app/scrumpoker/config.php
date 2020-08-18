?php
// database configuration parameters
$conn = array(
    'dbname' => 'scrum_online',
    'user' => 'root',
    'password' => 'passwd',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
);

// This is used to create the join link
$host = "http://scrumpoker.siimp.ee";

$cardSets = [['1', '2', '3', '5', '8', '13', 'lebo ots', '42']];

// Src tree for documentation linking from page
$src = "https://github.com/Toxantron/scrumonline/tree/master";

// Active ticketing plugins of the page
$plugins = [
    // Plugin to load issues from github
    'GitHub',
    // Plugin to load issues from JIRA
    'JIRA',
    // Plugin to load issues from Gitlab
    'Gitlab'
];

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
