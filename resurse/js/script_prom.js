function timp_petrecut(){
	console.log(1);
	if(localStorage.secundeprom)
		localStorage.secundeprom=Number(localStorage.secundeprom)+1;
	else
		localStorage.secundeprom=1;
	if(localStorage.secundeprom==60){
		localStorage.secundeprom=0;
		if(localStorage.minuteprom)
			localStorage.minuteprom=Number(localStorage.minuteprom)+1;
		else
			localStorage.minuteprom=1;
	}
	var p = document.getElementById("timp_p");
	
	if(localStorage.minuteprom && localStorage.minuteprom>1)
	p.innerHTML="Ati petrecut "+localStorage.minuteprom.toString()+" minute, "+localStorage.secundeprom.toString()+" secunde pe pagina";
	else
		if(localStorage.minuteprom)
			p.innerHTML="Ati petrecut un minut,"+localStorage.secundeprom.toString()+" secunde pe pagina";
		else
			p.innerHTML="Ati petrecut "+localStorage.secundeprom.toString()+" secunde pe pagina";
	console.log(2);
	setTimeout(timp_petrecut,1000);
}   

window.onload=function(){
	timp_petrecut();
}

function arabe(){
	document.getElementById("lista").type="1";
}

function mari(){
	document.getElementById("lista").type="A";
}

function mici(){
	document.getElementById("lista").type="a";
}

function romane(){
	document.getElementById("lista").type="I";
}