function timp_petrecut(){
	console.log(1);
	if(localStorage.secundeprod)
		localStorage.secundeprod=Number(localStorage.secundeprod)+1;
	else
		localStorage.secundeprod=1;
	if(localStorage.secundeprod==60){
		localStorage.secundeprod=0;
		if(localStorage.minuteprod)
			localStorage.minuteprod=Number(localStorage.minuteprod)+1;
		else
			localStorage.minuteprod=1;
	}
	var p = document.getElementById("timp_p");
	
	if(localStorage.minuteprod && localStorage.minuteprod>1)
	p.innerHTML="Ati petrecut "+localStorage.minuteprod.toString()+" minute, "+localStorage.secundeprod.toString()+" secunde pe pagina";
	else
		if(localStorage.minuteprod)
			p.innerHTML="Ati petrecut un minut,"+localStorage.secundeprod.toString()+" secunde pe pagina";
		else
			p.innerHTML="Ati petrecut "+localStorage.secundeprod.toString()+" secunde pe pagina";
	console.log(2);
	setTimeout(timp_petrecut,1000);
}   

window.onload=function(){
	timp_petrecut();
}


