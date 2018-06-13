var i=0,x,z=0,winA,winB,flagA,flagB;

 function myFunction() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("rollit").innerText = x;
    if(i==1)
		x!=6;
	if((i%2==0)&&(x!=6))
		document.getElementById("turn").innerHTML="<b>Turn of player B</b> ";
	else if((i%2==1)&&(x!=6))
		document.getElementById("turn").innerHTML="<b>Turn of player A</b>";
	if(x!=6)
		i++;
	flagA=0;
	flagB=0;
 }

 function lockA() {
	 var x=document.getElementById("rollit").innerText ;
	 if((document.getElementById("turn").innerHTML=="<b>Turn of player A</b>")&&(x==6)){
		 if(document.getElementById("lockerA").innerText=="2A")
		 {  
			 document.getElementById("lockerA").innerHTML="1A";
			 document.getElementById("r1").innerHTML="1A";
		 }
		 else if(document.getElementById("lockerA").innerText=="1A"){
			 if(document.getElementById("r1").innerHTML=="1A"){
				 document.getElementById("lockerA").innerHTML=" ";
			     document.getElementById("r1").innerHTML="2A";
			 }
			  else if(document.getElementById("r1").innerHTML==" "){
				 document.getElementById("lockerA").innerHTML=" ";
			     document.getElementById("r1").innerHTML="1A";
			 }
				 
		 }
	 }
 }
 
 function lockB() {
	var x=document.getElementById("rollit").innerText;
	 if((document.getElementById("turn").innerHTML=="<b>Turn of player B</b> ")&&(x==6)){
		 if(document.getElementById("lockerB").innerText=="2B")
		 {  
			 document.getElementById("lockerB").innerHTML="1B";
			 document.getElementById("r15").innerHTML="1B";
		 }
		else if(document.getElementById("lockerB").innerText=="1B"){
			 if(document.getElementById("r15").innerHTML=="1B"){
				 document.getElementById("lockerB").innerHTML=" ";
			     document.getElementById("r15").innerHTML="2B";
			 }
			  else if(document.getElementById("r15").innerHTML==" "){
				 document.getElementById("lockerB").innerHTML=" ";
			     document.getElementById("r15").innerHTML="1B";
			 }
				 
		 }
	 }
 }
 
 function move(text){
	 var x=document.getElementById("rollit").innerText ;
	 var y;
	 var z;
	
     y=Number(text[1])+x;
	 z=Number(text[1]);
	
 
 if(document.getElementById("turn").innerHTML=="<b>Turn of player A</b>"){
	 if(y<=28){
		 if((document.getElementById('r'+y).innerText==" ")&&(document.getElementById(text).innerText=="1A")){
			  document.getElementById(text).innerText=" ";
			 document.getElementById('r'+y).innerText="1A";
		 }
		  
		  if((document.getElementById('r'+y).innerText==" ")&&(document.getElementById(text).innerText=="2A")){
			  document.getElementById(text).innerText="1A";
			 document.getElementById('r'+y).innerText="1A";
		 }
		 if((document.getElementById('r'+y).innerText=="1A")&&(document.getElementById(text).innerText=="1A")){
			  document.getElementById(text).innerText=" ";
			 document.getElementById('r'+y).innerText="A";
		 }
	 }
 }
 
	 
 }
 
