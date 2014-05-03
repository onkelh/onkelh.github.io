<!DOCTYPE html>
<html ng-app lang="no">

<head>
	<meta charset="utf-8">
    <title>Tautraord.no</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"> 
    <link rel="stylesheet" href="styles.css" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=PT+Serif:700,400italic' rel='stylesheet' type='text/css'>
</head>
<body>

	<div class="header">

		<h1>Tautraord.no</h1>

	</div>

	<div class="content">

		<?php
			echo "<html>\n<body>\n\t<table style=''>\n\n";
			$f = fopen("tautraord.csv", "r");
			$trcount = 0; //start the row count as 0
			while (($line = fgetcsv($f)) !== false) {
			        $trclass = ''; if ($trcount%2==0);
			        echo "\t\t<tr".$trclass.">\n"; //same as before, but now this also has the variable $class to setup a class if needed
			        $tdcount = 0; //reset to 0 for each inner loop
			        foreach ($line as $cell) {
			                $tdclass = ''; if ($tdcount%2==0) { $tdclass=' class="word"'; } //default to nothing, but if it's even apply a class
			                echo "\t\t\t<td ".$tdclass."style='padding:.4em;'>" . htmlspecialchars($cell) . "</td>"; //same as before, but now this also has the variable $class to setup a class if needed
			                $tdcount++; //go up one each loop
			        }
			        echo "\r</tr>\n";
			        $trcount++; //go up one each loop
			}
			fclose($f);
			echo "\n\t</table>\n</body>\n</html>";
		?>

	</div>
</body>
</html>