<?php
// Retrieve search text from POST data
$searchText = $_POST['searchText'];

// Example: Save search text to a file
$file = 'search_history.txt';
$current = file_get_contents($file);
$current .= $searchText . "\n";
file_put_contents($file, $current);

// You can perform other actions here like storing in a database, etc.
?>
