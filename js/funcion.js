//Botones para ver las referencias del CV.


document.getElementById('botonReferencia1').onclick = function (){
    let referencia1=document.getElementById("referencia1");
    let botonReferencia1=document.getElementById("botonReferencia1");

    if (botonReferencia1.innerHTML.trim()=="Ver Referencias"){
        referencia1.innerHTML="Referencia: Jose Fernandez 11-7777-3333";
        botonReferencia1.innerHTML="Ocultar Referencias";
    }
   else if (botonReferencia1.innerHTML.trim()=="Ocultar Referencias"){

        referencia1.innerHTML=""
        botonReferencia1.innerHTML="Ver Referencias";
    }
}


document.getElementById('botonReferencia2').onclick = function (){
    let referencia2=document.getElementById("referencia2");
    let botonReferencia2=document.getElementById("botonReferencia2");

    if (botonReferencia2.innerHTML.trim()=="Ver Referencias"){
        referencia2.innerHTML="Referencia: Juan Garcia 11-5555-7777";
        botonReferencia2.innerHTML="Ocultar Referencias";
    }
   else if (botonReferencia2.innerHTML.trim()=="Ocultar Referencias"){

        referencia2.innerHTML=""
        botonReferencia2.innerHTML="Ver Referencias";
    }
}


document.getElementById('botonReferencia3').onclick = function (){
    let referencia3=document.getElementById("referencia3");
    let botonReferencia3=document.getElementById("botonReferencia3");

    if (botonReferencia3.innerHTML.trim()=="Ver Referencias"){
        referencia3.innerHTML="Referencia: Hugo Perez 11-6666-5555";
        botonReferencia3.innerHTML="Ocultar Referencias";
    }
   else if (botonReferencia3.innerHTML.trim()=="Ocultar Referencias"){

        referencia3.innerHTML=""
        botonReferencia3.innerHTML="Ver Referencias";
    }
}


document.getElementById('botonReferencia4').onclick = function (){
    let referencia4=document.getElementById("referencia4");
    let botonReferencia4=document.getElementById("botonReferencia4");

    if (botonReferencia4.innerHTML.trim()=="Ver Referencias"){
        referencia4.innerHTML="Referencia: Luis Lopez 11-2222-4444";
        botonReferencia4.innerHTML="Ocultar Referencias";
    }
   else if (botonReferencia4.innerHTML.trim()=="Ocultar Referencias"){

        referencia4.innerHTML=""
        botonReferencia4.innerHTML="Ver Referencias";
    }
}