<!DOCTYPE html>
<html ng-app lang="no">

<head>
	<meta charset="utf-8">
    <title>Tautraord.no</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"> 
    <link rel="stylesheet" href="styles.css" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Roboto:100,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Special+Elite' rel='stylesheet' type='text/css'>
</head>
<body class="bg-front">

	<div class="container">

		<div class="header">

			<h1 class="heading-large">Tautraord.no</h1>

			<p class="intro">Her finner du ord og uttrykk som brukes og er blitt brukt på øya Tautra i Trondheimsfjorden i Nord-Trøndelag. Mange av dem brukes også andre steder i Norge, men disse ordene og utrykkene er skrevet ned av familie født og oppvokst på Tautra.</p>

		</div>

		<div class="content">
			<?php
				echo '
				<table>
					<thead><th></th><th></th></thead>
				';

				$file = fopen("tautra-ord.csv", "r");

				while (($line = fgetcsv($file)) !== false) {
				        
				        echo '<tr class="row">';
				        
				        $i = 0;
				        foreach ($line as $cell) {
				            ($i % 2 == 0 ? $tdclass = 'word' : $tdclass = 'explanation');
				            echo sprintf('<td class="%s">%s</td>', $tdclass, htmlspecialchars($cell));
				            $i++;
				        }

				        echo '</tr>';
				}
				fclose($file);
				echo '
					</table>
				';
			?>
		</div>
	</div>
</body>
</html>