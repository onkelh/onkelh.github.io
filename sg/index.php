<?php include("inc/dochead.php"); ?>

<body>

	<header class="header">
		<h1>Amedia stilguide – selveste fasiten!</h1>
	</header>

	<?php include("inc/menu.php"); ?>

	<main class="main">

		<h2 class="heading-main">Velkommen til Amedias stilguide!</h2>

		<h3>Hvorfor har vi en stilguide?</h3>
		<p>Det er mange kokker i og utenfor Amedia. Det vet ikke kundene våre, og kanskje skurrer det litt når det finnes fire ulike knapper og fem forskjellige linjehøyder når tekststørrelsen er 16px, i grensesnittet til lokalavisen.</p>
		<p>Denne guiden skal være med å sørge for at grafiske elementer ser like ut overalt.</p>

		<h3>Hvem er denne guiden for?</h3>
		<ul>
			<li>Designere og frontend-utviklere i Amedia</li>
			<li>Designere og frontend-utviklere utenfor Amedia</li>
		</ul>

		<h3>Hvordan bruke stilguiden:</h3>
		<ul>
			<li>Denne stilguiden viser kun visuelt hvordan elementer på atom-nivå skal være. Klassenavnene skal ikke brukes i andre sammenhenger enn her, med mindre du sliter veldig med å lage bedre klassenavn som er mer korrekt.</li>
			<li>Noen steder vil du se at det er brukt ikke-semantiske html-elementer (f.eks div i stedet for h1). Dette er meningen, og med å understreke at konteksten stilen påføres et element bestemmer hva slags element det skal være. Disse kalles i koden bare <span class="strong">flex-element</span>!</li>
			<li>Stilguiden er ingen tvangstrøye, men hvis du sliter med å begrunne hvorfor du lager en knapp med et annet utseende så bør det ringe en bjelle :)</li>
		</ul>

</body>
</html>
