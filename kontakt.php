<!DOCTYPE HTML>
<html lang="PL">
<head>
	<meta charset="UTF-8">
	<meta name="author" content="Grzegorz Borkowski">
	<meta name="contact" content="gborkowski1998@gmail.com">
	<meta name="keywords" content="portfolio, Grzegorz, Borkowski, junior, programista, programmer, web developer, javascript, html, css, php, js, cv, Curriculum, Vitae">
	<meta name="description" content="Portfolio - Grzegorz Borkowski">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Portfolio - Grzegorz Borkowski</title>
		
	<link rel="stylesheet" href="css/arkusz.css" type="text/css">
	<link rel="stylesheet" href="css/fontello.css" type="text/css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&amp;subset=cyrillic-ext">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&amp;subset=latin-ext">
	
	<script src="js/formularz.js"></script>
</head>
<body>
	<section>
		<header>
			<a class="baner" href="index.html">
				<span class="portfolio">
					Portfolio - Grzegorz Borkowski
				</span>
			</a>
			<h2 class="invisible">x</h2>
		</header>
		<section class="menu">
			<h2 class="invisible">x</h2>
			<section class="menu_l">
			<h2 class="invisible">x</h2>
				<article class="kafelek1">
					<a class="kafelki" href="index.html">
						<i class="demo-icon icon-user-male"></i><br>
						<h2 class="guziczki">
							O mnie
						</h2>
					</a>
				</article>
				<article class="kafelek2">
					<a class="kafelki" href="galeria.html">
						<i class="demo-icon icon-art-gallery"></i><br>
						<h2 class="guziczki">
							Moje prace
						</h2>
					</a>
				</article>
				<article class="kafelek3">
					<a class="kafel" href="kontakt.php">
						<i class="demo-icon icon-vcard"></i><br>
						<h2 class="guziczki">
							Kontakt
						</h2>
					</a>
				</article>
			</section>
			<section class="menu_p">
			<h2 class="invisible">x</h2>
				<span class="kontakt">
					Kontakt
				</span>
					<form action="#" method="POST" onsubmit="sprawdzenie();">
						<table>
							<tr>
								<td class="nazwa">Imie*: </td>
								<td class="dane"><input type="text" id="imie" name="imie" placeholder="Podaj swoje imię" minlength="2" required="required" onkeyup="sprawdz_imie();"/></td>
								<td class="znaczek" id="1"><span class="weryfikacja" id="weryfikacja1">✖</span></td>
							</tr>
							<tr>
								<td class="nazwa">Nazwisko*: </td>
								<td class="dane"><input type="text" id="nazwisko" name="nazwisko" placeholder="Podaj swoje nazwisko" minlength="2" required="required" onkeyup="sprawdz_nazwisko();" /></td>
								<td class="znaczek" id="2"><span class="weryfikacja" id="weryfikacja2">✖</span></td>
							</tr>
							<tr>
								<td class="nazwa">Telefon*: </td>
								<td class="dane"><input type="tel" id="telefon" name="telefon" placeholder="Podaj swój numer telefonu" minlength="9" maxlength="9" required="required" onkeyup="sprawdz_telefon();" /></td>
								<td class="znaczek" id="3"><span class="weryfikacja" id="weryfikacja3">✖</span></td>
							</tr>
							<tr>
								<td class="nazwa">Adres e-mail*: </td>
								<td class="dane"><input type="email" id="mail" name="mail" placeholder="Podaj swój e-mail" minlength="5" required="required" onkeyup="sprawdz_mail();"/></td>
								<td class="znaczek" id="4"><span class="weryfikacja" id="weryfikacja4">✖</span></td>
							</tr>
							<tr>
								<td>Tekst: </td>
								<td><textarea placeholder="Treść zapytania" name="pole" id="pole"></textarea></td>
								<td class="znaczek" id="5"></td>
							</tr>
						</table>
						<span class="wysylanie">
							<span class="wymagane">
								* - pole wymagane
							</span>
							<input type="submit" value="Wyślij"> <input type="reset" value="Wyczyść">
						</span>
					</form>
						<span class="php">
							<?php
								//Pobiera dane
								$imie = $_POST['imie'];
								$nazwisko = $_POST['nazwisko'];
								$telefon = $_POST['telefon'];
								$mail = $_POST['mail'];
								$pole = $_POST['pole'];
								
								$zapisz_imie = $imie."\r\n";
								$zapisz_nazwisko = $nazwisko."\r\n";
								$zapisz_telefon = $telefon."\r\n";
								$zapisz_mail = $mail."\r\n";
								$zapisz_pole = $pole."\r\n";
								
								//Jeżeli podane pola są uzupełnione
								if (isset($imie) && isset($nazwisko) && isset($telefon) && isset($mail)){ 
									$fp = fopen('formularz.txt','a'); //Otwiera formularz.txt
									fputs($fp,"Imie: "); //Wpisuje imie do formularz.txt
									fputs($fp,$zapisz_imie);
									
									fputs($fp,"Nazwisko: ");
									fputs($fp,$zapisz_nazwisko);
									
									fputs($fp,"Telefon: ");
									fputs($fp,$zapisz_telefon);
									
									fputs($fp,"Mail: ");
									fputs($fp,$zapisz_mail);
									
									fputs($fp,"Pole: ");
									fputs($fp,$zapisz_pole);
									
									fclose($fp); //Zamyka formularz.txt
								}
								else{
									
								}
							?>
						</span>
			</section>
			<div class="clear"></div>
		</section>
		<footer>
			<span class="stopka2">
				2018 &copy; Grzegorz Borkowski - Wszelkie prawa zastrzeżone!
			</span>
				<a class="mail" href="mailto:gborkowski1998@gmail.com" title="Wyślij maila!">
					<i class="demo-icon icon-mail"></i>
					<span class="stopka">
						gborkowski1998@gmail.com
					</span>
				</a>
		</footer>
	</section>
</body>
</html>