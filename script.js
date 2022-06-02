let tekstWP = "";
let liczbaa = "";
let liczbab = "";
let ktoraLiczba = 1;
let dzialanie = "";
let gotowe;

document.getElementById("one").onclick=function(){
    tekstWP+="1";
    if(ktoraLiczba==1){
        liczbaa+="1";
    }
    if(ktoraLiczba==2){
        liczbab+="1";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("zero").onclick=function(){
    tekstWP+="0";
    if(ktoraLiczba==1){
        liczbaa+="0";
    }
    if(ktoraLiczba==2){
        liczbab+="0";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("two").onclick=function(){
    tekstWP+="2";
    if(ktoraLiczba==1){
        liczbaa+="2";
    }
    if(ktoraLiczba==2){
        liczbab+="2";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("three").onclick=function(){
    tekstWP+="3";
    if(ktoraLiczba==1){
        liczbaa+="3";
    }
    if(ktoraLiczba==2){
        liczbab+="3";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("four").onclick=function(){
    tekstWP+="4";
    if(ktoraLiczba==1){
        liczbaa+="4";
    }
    if(ktoraLiczba==2){
        liczbab+="4";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("five").onclick=function(){
    tekstWP+="5";
    if(ktoraLiczba==1){
        liczbaa+="5";
    }
    if(ktoraLiczba==2){
        liczbab+="5";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("six").onclick=function(){
    tekstWP+="6";
    if(ktoraLiczba==1){
        liczbaa+="6";
    }
    if(ktoraLiczba==2){
        liczbab+="6";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("seven").onclick=function(){
    tekstWP+="7";
    if(ktoraLiczba==1){
        liczbaa+="7";
    }
    if(ktoraLiczba==2){
        liczbab+="7";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("eight").onclick=function(){
    tekstWP+="8";
    if(ktoraLiczba==1){
        liczbaa+="8";
    }
    if(ktoraLiczba==2){
        liczbab+="8";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("nine").onclick=function(){
    tekstWP+="9";
    if(ktoraLiczba==1){
        liczbaa+="9";
    }
    if(ktoraLiczba==2){
        liczbab+="9";
    }
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("clean").onclick=function(){
    tekstWP="";
    liczbaa="";
    liczbab="";
    ktoraLiczba=1;
    dzialanie = "";
    document.getElementById('pKalk').textContent=tekstWP;
}

document.getElementById("add").onclick=function(){
    if(ktoraLiczba==1){
        ktoraLiczba++;
        dzialanie = "add";
        tekstWP+="+";
        document.getElementById('pKalk').textContent=tekstWP;
    } 
}

document.getElementById("minus").onclick=function(){
    if(ktoraLiczba==1){
        ktoraLiczba++;
        dzialanie = "minus";
        tekstWP+="-";
        document.getElementById('pKalk').textContent=tekstWP;
    }
}

document.getElementById("mn").onclick=function(){
    if(ktoraLiczba==1){
        ktoraLiczba++;
        dzialanie = "mn";
        tekstWP+="*";
        document.getElementById('pKalk').textContent=tekstWP;
    }
}

document.getElementById("dz").onclick=function(){
    if(ktoraLiczba==1){
        ktoraLiczba=2;
        dzialanie = "dz";
        tekstWP+="/";
        document.getElementById('pKalk').textContent=tekstWP;
    }
}

document.getElementById("ile").onclick=function(){
    if(ktoraLiczba==2 && tekstWP!=""){
        if(dzialanie=="add"){
            gotowe = Number(liczbaa) + Number(liczbab);
        }
        else if(dzialanie=="minus"){
            gotowe = Number(liczbaa) - Number(liczbab);
        }
        else if(dzialanie=="mn"){
            gotowe = Number(liczbaa) * Number(liczbab);
        }
        else if(dzialanie=="dz"){
            gotowe = Number(liczbaa) / Number(liczbab);
        }
        document.getElementById('pKalk').textContent=gotowe.toString();
    }

    console.log(liczbaa);
    console.log(liczbab);
}