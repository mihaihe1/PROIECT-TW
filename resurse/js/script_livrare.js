function timp_petrecut(){
	//console.log(1);
	if(localStorage.secundelivrare)
		localStorage.secundelivrare=Number(localStorage.secundelivrare)+1;
	else
		localStorage.secundelivrare=1;
	if(localStorage.secundelivrare==60){
		localStorage.secundelivrare=0;
		if(localStorage.minutelivrare)
			localStorage.minutelivrare=Number(localStorage.minutelivrare)+1;
		else
			localStorage.minutelivrare=1;
	}
	var p = document.getElementById("timp_p");
	
	if(localStorage.minutelivrare && localStorage.minutelivrare>1)
	p.innerHTML="Ati petrecut "+localStorage.minutelivrare.toString()+" minute, "+localStorage.secundelivrare.toString()+" secunde pe pagina";
	else
		if(localStorage.minutelivrare)
			p.innerHTML="Ati petrecut un minut,"+localStorage.secundelivrare.toString()+" secunde pe pagina";
		else
			p.innerHTML="Ati petrecut "+localStorage.secundelivrare.toString()+" secunde pe pagina";
	//console.log(2);
	setTimeout(timp_petrecut,1000);
}
  
var nr1;

window.onload=function(){
	timp_petrecut();
	
	var nume = prompt("Cum te numesti?","Nume");
	document.getElementById("titlu").innerHTML="Salut,"+nume+" !";
	var seconds = 2;
	var countdown = setInterval(function(){
		seconds--;
		if(seconds <= 0) {
			clearInterval(countdown);
			document.getElementById("titlu").innerHTML="Livrare";
		}
	}, 1000);
	
	if(localStorage.getItem("nr"))
		nr1=localStorage.getItem("nr");
	else
	{
		nr1=10;
		localStorage.setItem("nr",10);
	}
	console.log(localStorage.getItem("nr"));
	document.getElementById("par").style.fontSize=nr1.toString()+"px";
	document.getElementById("dim").innerHTML="Dimensiunea: "+nr1.toString()+"px";
	
	var titlu = document.getElementById("api").innerHTML;
	var cop = titlu;
	var n=cop.length;
	//console.log(n);
	titlu.innerHTML="";
	var i=0;
	//console.log(cop);
	var seconds1 = parseInt(n/2)+1;
	//console.log(seconds1);
	var countdown1 = setInterval(function(){
		seconds1--;
		//console.log(seconds1);
		if(seconds1 <= 0){
			//console.log(9);
			document.getElementById("api").innerHTML=cop;
			clearInterval(countdown1);
		}
		let str1=cop.substr(0,i+1);
		let str2=cop.substr(n-i-1,n-1);
		//console.log(str1,str2);
		if(i==parseInt(n/2))
			document.getElementById("api").innerHTML=cop;
		else
			document.getElementById("api").innerHTML=str1+" "+str2;
		//console.log(i);
		i+=1;
	},1000);
	//document.getElementById("api").innerHTML=cop;
}

function func1(){
	localStorage.setItem("nr",10);
	document.getElementById("par").style.fontSize="10px";
	document.getElementById("dim").innerHTML="Dimensiunea: 10px";
}

function func2(){
	localStorage.setItem("nr",14);
	document.getElementById("par").style.fontSize="14px";
	document.getElementById("dim").innerHTML="Dimensiunea: 14px";
}

function func3(){
	localStorage.setItem("nr",18);
	document.getElementById("par").style.fontSize="18px";
	document.getElementById("dim").innerHTML="Dimensiunea: 18px";
}

function res(){
	document.getElementById("par").style.fontSize="10px";
	localStorage.removeItem("nr");
	document.getElementById("dim").innerHTML="Dimensiunea: 10px";
}