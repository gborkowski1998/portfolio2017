var obrazki = ['','img/1.png','img/2.png','img/3.png','img/4.png','img/5.png'];
var strony = ['','http://borkowskigrzegorz.wex.pl/sklep/','http://borkowskigrzegorz.wex.pl/hobby/forum.html','http://borkowskigrzegorz.wex.pl/projekt/','http://amping.esy.es','http://borkowskigrzegorz.wex.pl/portfolio/programista-webowy.html'];
var tresci = ['','Założeniem projektu było stworzenie przykładowego zadania, które będzie zawierało bazę danych oraz stronę www o tematyce e.14 dla uczniów naszej szkoły. Pracę wykonałem całkowicie sam. Projekt został ukończony w 2017 roku.','Jest to jedna ze stron, którą tworzyliśmy w ramach przygotowania do egzaminu e.14. Strona miała za zadanie rejestrację nowych użytkowników poprzez wpisanie podanych danych do bazy danych. Pracę wykonałem samodzielnie w 2017 roku.','Jest to większy grupowy projekt, w którym mieliśmy za zadanie przetestować nowo poznane ciasteczka i sesję. Moje zadanie polegało na stworzeniu szaty graficznej, wszelkich skryptów javascript oraz na walidacji strony. Stronę ukończyliśmy w 2017 roku.',"Jest to swojego rodzaju prosty kalkulator, który ma za zadanie obliczyć rzeczywistą wartość ulepszenia przedmiotu. Dzięki pomocy od twórców gry dostałem dostęp do danych, a samą stronę stworzyłem w 2017 roku wraz z paroma modyfikacjami. <a class='beta' href='img/beta.jpg' target='_blank'>Wersja beta</a>",'Była to moja jedna z pierwszych bardziej profesjonalnych stron, którą stworzyłem wzorując się z internetu. Przeznaczeniem tej strony miał być prosty dostęp do materiałów potrzebnych na szkolne zajęcia. Stronę wykonałem we wrześniu 2017 roku.'];
var x=0;
function zmiana(id){
var y = document.getElementById(id).id;
	document.querySelector("#podglad").src = obrazki[y];
	document.querySelector("#podglad").style.boxShadow = "0 0 25px 10px #FFFFFF";
	document.querySelector("#podglad").style.transition = "all .4s linear";
	document.querySelector("#adres").href = strony[y];
	document.querySelector("#podglad").style.bottom = "148px";
	document.querySelector("#podglad").style.transition = "all .8s linear";
	document.querySelector("#adres").style.height = "230px";
	document.querySelector(".cos").style.display = "block";
	document.querySelector(".cos").innerHTML = tresci[y];
	if(document.getElementById(id).onclick){
		x++;
	}
	if(x%2===0){
	document.querySelector("#podglad").style.bottom = "0px";
	document.querySelector("#podglad").style.transition = "all .8s linear";
	document.querySelector("#adres").style.height = "370px";
	document.querySelector(".cos").style.display = "none";
	}
}
function usun(){
	document.querySelector("#podglad").style.boxShadow = "initial";	
	document.querySelector("#podglad").style.transition = "all .4s linear";
}