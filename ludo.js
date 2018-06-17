var i=0,x,z=0,winA=0,winB=0,flagA,flagB,daan=0,count=1,z=0;

 function myFunction() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("rollit").innerText = x;
    if(i==1)
		x!=6;
	if((i%2==0)&&(x!=6))
		document.getElementById("turn").innerHTML="Turn of B";
	else if((i%2==1)&&(x!=6))
		document.getElementById("turn").innerHTML="Turn of A";
	if(x!=6)
		i++;
	flagA=0;
	flagB=0;
	 check();
 }

 function lockA() {
	 var x=document.getElementById("rollit").innerText ;
	 if((document.getElementById("turn").innerHTML=="Turn of A")&&(x==6)){
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
	 if((document.getElementById("turn").innerHTML=="Turn of B")&&(x==6)){
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
 
 
function check()
{

if(x==6)
daan=1;
else if(document.getElementById('turn').innerHTML=="Turn of B")
{
if(document.getElementById('lockerA').innerHTML=="2A")
daan=0;
else if((document.getElementById('lockerA').innerHTML=="1A")&&(winA==1))
daan=0;
else if((document.getElementById('lockerA').innerHTML=="1A")||(document.getElementById('lockerA').innerHTML=="0A"))
daan=1;
}
else if(document.getElementById('turn').innerHTML=="Turn of A")
{if(document.getElementById('lockerB').innerHTML=="2B")
daan=0;
else if((document.getElementById('lockerB').innerHTML=="1B")&&(winB==1))
daan=0;
else if((document.getElementById('lockerB').innerHTML=="1B")||(document.getElementById('lockerB').innerHTML=="0B"))
daan=1;

}

}


function move(text)
{var y;
if(Number(text[1]+text[2])>=10)
y=Number(text[1]+text[2])+x;
else
y=Number(text[1])+x;

if((((document.getElementById('turn').innerHTML=="Turn of B")&&(x!=6))||((document.getElementById('turn').innerHTML=="Turn of A")&&(x==6)))&&(flagA==0))
{
if((document.getElementById(text).innerHTML=="1A")||(document.getElementById(text).innerHTML=="2A"))
   {flagA=1;
    daan=0;

 if(y>28)
      {
       flagA=0;
      }
  if(y==28)
    {
     winA++;
     if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML=" ";
     if(document.getElementById(text).innerHTML=="2A")
       document.getElementById(text).innerHTML="1A";
     if(document.getElementById("r28").innerHTML=="1B")
       {if(document.getElementById("lockerB").innerHTML=="1B")
             document.getElementById("lockerB").innerHTML="2B";
        else
            document.getElementById("lockerB").innerHTML="1B";
        }
     if(document.getElementById("r28").innerHTML=="2B")
        document.getElementById("lockerB").innerHTML="2B"; 

     }

if(y==28)
document.getElementById("r28").innerHTML=" ";

 else if((document.getElementById('r'+y).innerHTML!="1A")&&(document.getElementById('r'+y).innerHTML!="1B")&&(document.getElementById('r'+y).innerHTML!="2B")&&(y!=28))
    {document.getElementById('r'+y).innerHTML="1A";
    if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
     }
  

else if((document.getElementById('r'+y).innerHTML=="1A")&&(y!=28))
    {
      document.getElementById('r'+y).innerHTML="2A";
    if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
     }

 else if((document.getElementById('r'+y).innerHTML=="1B")&&(y!=28))
       {if(document.getElementById("lockerB").innerHTML=="1B")
           {document.getElementById("lockerB").innerHTML="2B";
           document.getElementById('r'+y).innerHTML='1A';
           if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
          }
        else if(document.getElementById("lockerB").innerHTML=="0B")
          {document.getElementById("lockerB").innerHTML="1B";
           document.getElementById('r'+y).innerHTML='1A';
          if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
          }
       }
    else if((document.getElementById('r'+y).innerHTML=="2B")&&(y!=28))
    {
      document.getElementById('r'+y).innerHTML="1A";
      document.getElementById('lockerB').innerHTML="2B";
    if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
     }
   
   
      
     

        
     }
   
 

if(winA==2)
window.alert("congrats A wins");                           /* if winA==2    A wins*/
}













else if( (((document.getElementById('turn').innerHTML=="Turn of A")&&(x!=6))||((document.getElementById('turn').innerHTML=="Turn of B")&&(x==6)))&&(flagB==0))
{
if(y>28)
y=y-28;
var m=y-x;
if((document.getElementById(text).innerHTML=="1B")||(document.getElementById(text).innerHTML=="2B"))
   {flagB=1;
   daan=0;
   
    
     if(y==14)
    {
     winB++;
     if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
     if(document.getElementById(text).innerHTML=="2B")
        document.getElementById(text).innerHTML="1B";   
     
     if(document.getElementById("r14").innerHTML=="1A")
       {if(document.getElementById("lockerA").innerHTML=="1A")
             document.getElementById("lockerA").innerHTML="2A";
        else
            document.getElementById("lockerA").innerHTML="1A";
        }
     if(document.getElementById("r14").innerHTML=="2A")
        document.getElementById("lockerA").innerHTML="2A"; 
}
if(y==14)
document.getElementById("r14").innerHTML=" ";
 if(((m==8)||(m==9)||((m>9)&&(m<14)))&&((m+x)>=15))
       {
        flagB=0;
        }
      else if((document.getElementById('r'+y).innerHTML!="1A")&&(document.getElementById('r'+y).innerHTML!="1B")&&(document.getElementById('r'+y).innerHTML!="2A")&&(y!=14))
    {document.getElementById('r'+y).innerHTML="1B";
    if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
     }




else if(document.getElementById('r'+y).innerHTML=="1A")
       {if(document.getElementById("lockerA").innerHTML=="1A")
          {document.getElementById("lockerA").innerHTML="2A";
           document.getElementById('r'+y).innerHTML='1B';
           if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
          }
        else if(document.getElementById("lockerA").innerHTML=="0A")
          {document.getElementById("lockerA").innerHTML="1A";
           document.getElementById('r'+y).innerHTML='1B';
          if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
          }
       }

else if((document.getElementById('r'+y).innerHTML=="1B"))
    {
      document.getElementById('r'+y).innerHTML="2B";
    if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
     }
else if((document.getElementById('r'+y).innerHTML=="2A"))
    {
      document.getElementById('r'+y).innerHTML="1B";
      document.getElementById('lockerA').innerHTML="2A" ;
    if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
     }
   
   
      
   }
if(winB==2)
window.alert("congrats B wins");
}
}

