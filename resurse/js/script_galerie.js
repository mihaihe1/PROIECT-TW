function timp_petrecut(){
	console.log(1);
	if(localStorage.secundegal)
		localStorage.secundegal=Number(localStorage.secundegal)+1;
	else
		localStorage.secundegal=1;
	if(localStorage.secundegal==60){
		localStorage.secundegal=0;
		if(localStorage.minutegal)
			localStorage.minutegal=Number(localStorage.minutegal)+1;
		else
			localStorage.minutegal=1;
	}
	var p = document.getElementById("timp_pgal");
	
	if(localStorage.minutegal && localStorage.minutegal>1)
	p.innerHTML="Ati petrecut "+localStorage.minutegal.toString()+" minute, "+localStorage.secundegal.toString()+" secunde pe pagina";
	else
		if(localStorage.minutegal)
			p.innerHTML="Ati petrecut un minut,"+localStorage.secundegal.toString()+" secunde pe pagina";
		else
			p.innerHTML="Ati petrecut "+localStorage.secundegal.toString()+" secunde pe pagina";
	console.log(2);
	setTimeout(timp_petrecut,1000);
}


function vrst()	
{
	var dn=document.getElementById("inp");
	if(dn.value.length!=10||dn.value[2]!='#'||dn.value[5]!='#')
	{
		alert("Data nu a fost introdusa corect. Introduceti din nou.");
		clearInterval(F);
		dn.value='';
		document.getElementById("varsta").innerHTML="";
	}
	else
	{
		var v=document.getElementById("varsta");
		
		var d=new Date();
		var dt=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
		var ora=d.getHours()+" ore, "+d.getMinutes()+" minute, "+d.getSeconds()+" secunde";
		
		var data_curenta=dt.split(".");
		var z1=parseInt(data_curenta[0]);
		var l1=parseInt(data_curenta[1])-1;
		var a1=parseInt(data_curenta[2]);
		
		var data_nasterii=dn.value.split("#");
		var z2=parseInt(data_nasterii[0]);
		var l2=parseInt(data_nasterii[1])-1;
		var a2=parseInt(data_nasterii[2]);
		
		var ani=0;
		var luni=0;
		var zile=0;
		
		var z=[31,28,31,30,31,30,31,31,30,31,30,31];
		
		if(z2>z1)
		{
			z1+=z[l2-1];
			l1--;
		}
		if(l2>l1)
		{
			a1--;
			l1+=12;
		}
		zile=z1-z2;
		luni=l1-l2;
		ani=a1-a2;
		
		v.innerHTML=ani+" ani, "+luni+" luni, "+zile+" zile, "+ora;
	}
}

function calculeaza_varsta()	// task-ul II) 1.
{
	F=setInterval(vrst,1000);
}

function afiseaza_varsta()	// task-ul II) 1.
{
	var s=document.createElement("section");
	var prg=document.createElement("div");
	prg.innerHTML="Scrieti data nasterii in input-ul urmator sub forma: ZZ#LL#AAAA(de exemplu: 21#02#1992)";
	s.appendChild(prg);
	var t=document.getElementsByTagName("body");
	t[0].insertBefore(s,t[0].childNodes[1]);
	var inp=document.createElement("input");
	inp.setAttribute("id","inp");
	s.appendChild(inp);
	var but=document.createElement("button");
	but.innerHTML="Afiseaza varsta";
	but.style.marginLeft="10px";
	but.setAttribute("onclick","calculeaza_varsta()");
	s.appendChild(but);
	var v=document.createElement("div");
	v.setAttribute("id","varsta");
	s.appendChild(v);
}   

window.onload=function(){
	timp_petrecut();
	var x;
	afiseaza_varsta();
	var F;
}