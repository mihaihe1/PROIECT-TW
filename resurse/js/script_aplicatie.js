var nr1;
var rr;
window.onload=function(){
	var ajaxRequest = new XMLHttpRequest();

	ajaxRequest.onreadystatechange = function() {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
					//in proprietatea responseText am contintul fiserului JSON
					var obJson = JSON.parse(this.responseText);
					var cop = obJson;
					console.log(cop);
					afiseajaJsonTemplate(obJson);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/studenti.json)
	ajaxRequest.open("GET", "/json/apicultori.json", true);
	//trimit catre server cererea
	ajaxRequest.send();
	
	var cop = ajaxRequest;

	function afiseajaJsonTemplate(obJson) { 
			//in acets div voi afisa template-urile   
			var container=document.getElementById("afisTemplate");

			let textTemplate ="";
			//parcurg vetorul de studenti din obJson
			for(let i=0;i<obJson.produse.length;i++){
				//creez un template ejs (primul parametru al lui ejs.render)
				//acesta va primi ca parametru un student din vectorul de studenti din json {student: obJson.studenti[i]}
				//practic obJson.studenti[i] e redenumit ca "student" in template si putem sa ii accesam proprietatile: student.id etc
				textTemplate+=ejs.render("<div onclick='func(event)' class='templ_produs'>\
				<p>Id: <%= produs.id %></p>\
				<p>Nume: <%= produs.nume %></p>\
				<p>Pret: <%= produs.pret %></p>\
				<p>Calitate: <%= produs.calitate %></p>\
				<p>Stoc: <%= produs.stoc %></p>\
				<p>Rating: <%= produs.rating %></p>\
				</div>", 
				{produs: obJson.produse[i]});
			} 
			//adaug textul cu afisarea studentilor in container
			container.innerHTML=textTemplate;
			rr = Array.prototype.slice.call(document.getElementById("afisTemplate").children);
	}


if(localStorage.getItem("val"))
		nr1=localStorage.getItem("val");
	else
	{
		nr1="3";
		localStorage.setItem("val","3");
	}
if(parseInt(nr1)==1)
{
	document.getElementById("dn1").checked = true;
	document.getElementById("dn2").checked = false;
}
else if(parseInt(nr1)==2){
	document.getElementById("dn1").checked = false;
	document.getElementById("dn2").checked = true;
}
else
{
	document.getElementById("dn1").checked = false;
	document.getElementById("dn2").checked = false;
}

setTimeout(function(){ alert("Hello"); }, 1000);

var div = document.getElementById("afisTemplate").children;
console.log(div);
div.onclick=function(e){
	console.log(6);
	this.classList.toggle("selectat");
}

document.getElementById("reset").onclick=function(){
	var randuri = document.getElementById("afisTemplate").children;
        for (let i=0;i<randuri.length;++i) {
                    let r=randuri[i];
                    r.parentNode.removeChild(r);
                    i-=1;}
                for (let r of rr) {
                    document.getElementById("afisTemplate").appendChild(r);
                }
	var randuri = document.getElementById("afisTemplate").children;
	for(let i=0;i<randuri.length;i++)
		randuri[i].style.display="block"; 
	
}

document.getElementById("sorteaza_nume").onclick=function(){
	var randuri = document.getElementById("afisTemplate").children;
	var vranduri = Array.prototype.slice.call(randuri);
	vranduri.sort(function(a,b){
		return a.children[1].innerHTML.localeCompare(b.children[1].innerHTML);
	});
	for(let rand of vranduri){
		document.getElementById("afisTemplate").appendChild(rand);
	}
}

document.getElementById("medie_preturi").onclick=function(){
	var randuri = document.getElementById("afisTemplate").children;
	let sum = 0;
	for(let rand of randuri){
		let nr = rand.children[2].innerHTML.substr(6,rand.children[2].innerHTML.length-1);
		sum += parseInt(nr);
	}
	document.getElementById("medie").innerHTML="Media preturilor este "+(sum/randuri.length).toString();
}

document.getElementById("select").onclick=function(){
	var randuri = document.getElementsByClassName("selectat");
	var maxim = 0;
	var nume;
	for(let rand of randuri){
		let calitate = rand.children[3].innerHTML.substr(10,rand.children[3].innerHTML.length-1);
		let pret = rand.children[2].innerHTML.substr(6,rand.children[2].innerHTML.length-1);
		if(calitate/pret > maxim){
			maxim = calitate/pret;
			nume = rand.children[1].innerHTML.substr(6,rand.children[1].innerHTML.length-1);
		}
	}
	alert("Produsul cu cel mai bun raport calitate/pret este : "+nume.toString());
}

document.getElementById("modif").onclick=function(){
	var rasp = prompt("Dati id-ul si calitatea noua(id#calitate)");
	var str = rasp.split("#");
	let id = parseInt(str[0]);
	let calitate = parseInt(str[1]);
	var randuri = document.getElementById("afisTemplate").children;
	for(let rand of randuri){
		let id1 = parseInt(rand.children[0].innerHTML.substr(4,rand.children[0].innerHTML.length-1))
		if(id == id1)
			rand.children[3].innerHTML="Calitate: "+calitate.toString();
	}
}

}

window.onkeypress=function(e){
	var t = e.keyCode;
	if(t == 99){//cod pt tasta "C"
		var randuri = document.getElementById("afisTemplate").children;
		for(let i=0;i<randuri.length;i++){
			let rand = randuri[i];
			let nr = rand.children[3].innerHTML.substr(10,rand.children[3].innerHTML.length-1);
			console.log(nr);
				if(parseInt(nr)<10){
					randuri[i].style.display="none";
				}
			}
		}
}

function pastreaza_id(){
	console.log(1);
	var formular = document.getElementById("formular").children;
	for(let i=0;i<formular.length;i+=3){
		let f = formular[i];
		console.log(f);
		if(f.checked == false)
		{
			var randuri = document.getElementById("afisTemplate").children;
			for(let j=0;j<randuri.length;j++){
				let rand = randuri[j];
				let id = parseInt(rand.children[0].innerHTML.substr(4,rand.children[0].innerHTML.length-1));
				console.log(id);
				if(id == i/3 + 1){
					randuri[j].style.display="none";
					break;
				}
					
			}
		}
	}
}

function randInt(a,b){
	return Math.trunc(a+(b-a)*Math.random());
}

function func(event){
	//console.log(5);
	var a = event.target;
	a.classList.toggle("selectat");
	if(event.shiftKey){
		setInterval(function(){
			var randuri = document.getElementById("afisTemplate").children;
			var rand = randuri[0];
			rand.children[2].innerHTML="Pret: "+randInt(20,30).toString();
		},5000);
	}
}

function func1(){
	console.log(1);
	localStorage.setItem("val","1");
}

function func2(){
	console.log(2);
	localStorage.setItem("val","2");
}

function res(){
	localStorage.removeItem("val");
	document.getElementById("dn1").checked = false;
	document.getElementById("dn2").checked = false;
}

function but(){
	var randuri=document.getElementById("afisTemplate").children;
	for(let i=0;i<randuri.length;i++){
			let rand = randuri[i];
			let nr = rand.children[4].innerHTML.substr(6,rand.children[4].innerHTML.length-1);
				if(nr == "true" && parseInt(localStorage.getItem("val")) == 2){
					randuri[i].style.display="none";
				}
				if(nr == "false" && parseInt(localStorage.getItem("val")) == 1){
					randuri[i].style.display="none";
				}
			}
}