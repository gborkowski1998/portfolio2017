function sprawdzenie(){
	alert("Poprawnie wysłano formularz!");
}
		
function sprawdz_imie(){
	var imie = document.getElementById("imie").value;
	var reg = /[0-9]/g;
	var ntab = imie.match(reg);
			
	if(imie.length<=1 && imie.length>0){
		document.getElementById("imie").style.backgroundColor = "#404040";
		document.getElementById("1").innerHTML = '<span class="weryfikacja" id="weryfikacja1">✖ Podaj swoje imię!</span>';
	}
	else if(imie.length==0){
		document.getElementById("imie").style.backgroundColor = "#404040";
		document.getElementById("1").innerHTML = '<span class="weryfikacja" id="weryfikacja1">✖</span>';
	}
	else if(ntab!=null){//Jeżeli imię posiada cyfry
		document.getElementById("imie").style.backgroundColor = "#404040";
		document.getElementById("1").innerHTML = '<span class="weryfikacja" id="weryfikacja1">✖ Podaj swoje imię!</span>';
	}
	else{
		document.getElementById("imie").style.backgroundColor = "#6EE431";
		document.getElementById("weryfikacja1").textContent = "✓";
	}
}
		
function sprawdz_nazwisko(){
	var nazwisko = document.getElementById("nazwisko").value;
	var reg = /[0-9]/g;
	var ntab = nazwisko.match(reg);
			
	if(nazwisko.length<=1 && nazwisko.length>0){
		document.getElementById("nazwisko").style.backgroundColor = "#404040";
		document.getElementById("2").innerHTML = '<span class="weryfikacja" id="weryfikacja2">✖ Podaj swoje nazwisko!</span>';
	}
	else if(nazwisko.length==0){
		document.getElementById("nazwisko").style.backgroundColor = "#404040";
		document.getElementById("2").innerHTML = '<span class="weryfikacja" id="weryfikacja2">✖</span>';
	}
	else if(ntab!=null){//Jeżeli nazwisko posiada cyfry
		document.getElementById("nazwisko").style.backgroundColor = "#404040";
		document.getElementById("2").innerHTML = '<span class="weryfikacja" id="weryfikacja2">✖ Podaj swoje nazwisko!</span>';
	}
	else{
		document.getElementById("nazwisko").style.backgroundColor = "#6EE431";
		document.getElementById("weryfikacja2").textContent = "✓";
	}
}
		
function sprawdz_telefon(){
	var telefon = document.getElementById("telefon").value;
			
	if(isNaN(telefon)){
		document.getElementById("telefon").style.backgroundColor = "#404040";
		document.getElementById("3").innerHTML = '<span class="weryfikacja" id="weryfikacja3">✖ Podaj swój telefon!</span>';
	}
	else if(telefon.length<=8 && telefon.length>0){
		document.getElementById("telefon").style.backgroundColor = "#404040";
		document.getElementById("3").innerHTML = '<span class="weryfikacja" id="weryfikacja3">✖ Podaj swój telefon!</span>';
	}
	else if(telefon.length==0){
		document.getElementById("telefon").style.backgroundColor = "#404040";
		document.getElementById("3").innerHTML = '<span class="weryfikacja" id="weryfikacja3">✖</span>';
	}
	else{
		document.getElementById("telefon").style.backgroundColor = "#6EE431";
		document.getElementById("weryfikacja3").textContent = "✓";
	}
}
		
function sprawdz_mail(){
	var mail = document.getElementById("mail").value;
			
	if(mail.length<=4 && mail.length>0){
		document.getElementById("mail").style.backgroundColor = "#404040";
		document.getElementById("4").innerHTML = '<span class="weryfikacja" id="weryfikacja4">✖ Podaj swój mail!</span>';
	}
	else if(mail.length==0){
		document.getElementById("mail").style.backgroundColor = "#404040";
		document.getElementById("4").innerHTML = '<span class="weryfikacja" id="weryfikacja4">✖</span>';
	}
	else{
		document.getElementById("mail").style.backgroundColor = "#6EE431";
		document.getElementById("weryfikacja4").textContent = "✓";
	}
}