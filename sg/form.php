<?php include("inc/dochead.php"); ?>

<body>

	<header class="header">
		<h1>Amedia stilguide – selveste fasiten!</h1>
	</header>

	<?php include("inc/menu.php"); ?>

	<main class="main">

		<h2 class="heading-main">Skjema</h2>

		<p>Her vises typiske skjema-elementer som opptrer i avisene.</p>

		<section>
			<div class="sg-form-example">
				<label class="sg-form-label" for="some-text">Felt for lang input</label>
				<input class="sg-form-input-longString" type="text" name="some-text" value="">
			</div>
			<div class="sg-form-example">
				<label class="sg-form-label" for="some-text">Mobilnummer</label>
				<input class="sg-form-input-phone" type="text" name="some-text" value="">
			</div>
			<div class="sg-form-example">
				<label class="sg-form-label" for="some-text">Tekstområde</label>
				<textarea class="sg-form-input-longText" type="textarea" name="some-text" value=""></textarea>
			</div>
		</section>
	</main>

</body>
</html>
