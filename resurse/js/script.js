function timp_petrecut(){
	console.log(1);
	if(localStorage.secunde)
		localStorage.secunde=Number(localStorage.secunde)+1;
	else
		localStorage.secunde=1;
	if(localStorage.secunde==60){
		localStorage.secunde=0;
		if(localStorage.minute)
			localStorage.minute=Number(localStorage.minute)+1;
		else
			localStorage.minute=1;
	}
	var p = document.getElementById("timp_p");
	if(localStorage.minute && localStorage.minute>1)
	p.innerHTML="Ati petrecut "+localStorage.minute.toString()+" minute, "+localStorage.secunde.toString()+" secunde pe pagina";
	else
		if(localStorage.minute)
			p.innerHTML="Ati petrecut un minut,"+localStorage.secunde.toString()+" secunde pe pagina";
		else
			p.innerHTML="Ati petrecut "+localStorage.secunde.toString()+" secunde pe pagina";
	console.log(2);
	setTimeout(timp_petrecut,1000);
}    


window.onload=function(){
	//creez un obiect de tip XMLHttpRequest cu care pot transmite cereri catre server
	var ajaxRequest = new XMLHttpRequest();


	//la schimbarea starii obiectului XMLHttpRequest (la schimbarea proprietatii readyState)
	/* stari posibile:
	0 - netrimis
	1 - conexiune deschisa
	2 - s-au transmis headerele
	3 - se downleadeaza datele (datele sunt impartite in pachete si el primeste cate un stfel de pachet)
	4 - a terminat
	*/
	ajaxRequest.onreadystatechange = function() {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
					//in proprietatea responseText am contintul fiserului JSON
					document.getElementById("afisJson").innerHTML=this.responseText;
					var obJson = JSON.parse(this.responseText);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/studenti.json)
	ajaxRequest.open("GET", "/json/apicultori.json", true);
	//trimit catre server cererea
	ajaxRequest.send();
	
	timp_petrecut();
	
	}