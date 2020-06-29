function timp_petrecut(){
	console.log(1);
	if(localStorage.secundeinreg)
		localStorage.secundeinreg=Number(localStorage.secundeinreg)+1;
	else
		localStorage.secundeinreg=1;
	if(localStorage.secundeinreg==60){
		localStorage.secundeinreg=0;
		if(localStorage.minuteinreg)
			localStorage.minuteinreg=Number(localStorage.minuteinreg)+1;
		else
			localStorage.minuteinreg=1;
	}
	var p = document.getElementById("timp_p");
	
	if(localStorage.minuteinreg && localStorage.minuteinreg>1)
	p.innerHTML="Ati petrecut "+localStorage.minuteinreg.toString()+" minute, "+localStorage.secundeinreg.toString()+" secunde pe pagina";
	else
		if(localStorage.minuteinreg)
			p.innerHTML="Ati petrecut un minut,"+localStorage.secundeinreg.toString()+" secunde pe pagina";
		else
			p.innerHTML="Ati petrecut "+localStorage.secundeinreg.toString()+" secunde pe pagina";
	console.log(2);
	setTimeout(timp_petrecut,1000);
}   

window.onload=function(){
	timp_petrecut();
}