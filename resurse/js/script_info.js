function timp_petrecut(){
	console.log(1);
	if(localStorage.secundeinfo)
		localStorage.secundeinfo=Number(localStorage.secundeinfo)+1;
	else
		localStorage.secundeinfo=1;
	if(localStorage.secundeinfo==60){
		localStorage.secundeinfo=0;
		if(localStorage.minuteinfo)
			localStorage.minuteinfo=Number(localStorage.minuteinfo)+1;
		else
			localStorage.minuteinfo=1;
	}
	var p = document.getElementById("timp_p");
	
	if(localStorage.minuteinfo && localStorage.minuteinfo>1)
	p.innerHTML="Ati petrecut "+localStorage.minuteinfo.toString()+" minute, "+localStorage.secundeinfo.toString()+" secunde pe pagina";
	else
		if(localStorage.minuteinfo)
			p.innerHTML="Ati petrecut un minut,"+localStorage.secundeinfo.toString()+" secunde pe pagina";
		else
			p.innerHTML="Ati petrecut "+localStorage.secundeinfo.toString()+" secunde pe pagina";
	console.log(2);
	setTimeout(timp_petrecut,1000);
}   

window.onload=function(){
	timp_petrecut();
}
var ok=0;

function verif(){
	ok=1;
	var rasp = document.getElementById("info");
	var par=document.getElementById("raspuns");
	if(rasp.value==2011)
		par.innerHTML="Corect";
	else
		par.innerHTML="Gresit";
	 
	document.getElementById("idform").remove();
}

function foc(){
	var seconds = 3;
	var countdown = setInterval(function(){
		seconds--;
		if(seconds <= 0) {
			clearInterval(countdown);
			if(ok==0){
			document.getElementById("info").disabled = true;	
			alert("Timpul a expirat");
			document.getElementById("buton").remove();
			}
		}
	}, 1000);
}