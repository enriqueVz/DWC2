var apuntaDiv = document.getElementById("pizzapedido");


/*
//METIDO DENTRO DE ESTA FUNCIÓN RESPONDE AL CLICK OLE OLE Y OLE.
var bton = document.getElementById("btn");
bton.addEventListener("click", function() {

    var ourRequest = new XMLHttpRequest();
//AHORA PILLA LOS DATOS DEL ARCHIVO EN VEZ DE CON LA URL. HAY QUE METER EL PARSER.
ourRequest.open('GET', 'datos.json');

//FUNCIONA CON EL PROTOCOLO 4/200

ourRequest.onload = function() {
    //lA VARIABLE DEBE IR DENTRO DE LA FUNCION SI O SI
   // var ourData = ourRequest.responseText; ASÍ LEE EL OBJETO COMO TXT PLANO
//ASÍ TRANSFORMA A JSON Y LO LEE COMO TAL
   var ourData = JSON.parse(ourRequest.responseText);
   //Con esto devuelve el 1,2,3.
   damehtml(ourData);
  
   // damehtml(data); //ESTO NO VA

    if (this.readyState == 4)  {
        if(this.status=200) {
            //ESTO MANDA LOS DATOS A LA CONSOLA SI LA CONEXIÓN ES CORRECTA
           console.log(ourData);  // lo quitamos para sustituirlo por el html en la web, sin él no aparecen los datos en consola!!

    }  else { 
        alert("ОПА ОПА ПИСДИЕЦ")
        }
}
       //ASI FUNCIONA, sin readystate
    var ourData = ourRequest.responseText;
    console.log(ourData);
    
   
};

ourRequest.send();


});

*/



//esta funcion va!
function damehtml(data) {
    //Con esto ya se genera html al usar el boton
    var stringhtml = "";
    for(i = 0; i < data.length; i++) {
    stringhtml += "<h1>" + data[i].name + "is a " + data[i].species + ".</h1>";
}
//hasta aquí todo funciona.
    //afterend para que se muestre abajo
    apuntaDiv.insertAdjacentHTML("afterend", stringhtml);
 

} 


//......................................................................................................................................


 
var btnpizza = document.getElementById("btnajax")
btnpizza.addEventListener("click", function() {

    var rqstpizza = new XMLHttpRequest();

        rqstpizza.open('GET', 'datopizzas.json');

              rqstpizza.onload = function() {
                var pizzadatos = JSON.parse(rqstpizza.responseText);
                    damepizza(pizzadatos);
                     
           

        if (this.readyState == 4)  {
            if(this.status=200) {
                //ESTO MANDA LOS DATOS A LA CONSOLA SI LA CONEXIÓN ES CORRECTA
               console.log(pizzadatos);  // lo quitamos para sustituirlo por el html en la web, sin él no aparecen los datos en consola!!
    
        }  else { 
            alert("ОПА ОПА ПИСДИЕЦ")
            }
    }
}
rqstpizza.send();
});


function damepizza(data) {
    //Con esto ya se genera html al usar el boton
    //Se rellena con el bucle for, va a formar los botones radio
    var stringTamaño = ""; //Aquí se rellena el contenido de los botones
     for(i = 0;  i<3; i++) {
         stringTamaño += "<input name=1, type=radio>" + "Pizza" + data[i].tamaño  + "(" +data[i].precio + ")" + "<br>" + "</input><br>";
    
    //a partir de 2 porque ya hay 3 objetos en el json. 
}
    //Aqui se rellenan los checkboxes
    var stringIngr = "";
        for(i=3; i <8; i++) {
             stringIngr += "<input type=checkbox>" + data[i].ingrediente  + " (+1 Euro)" +  "</br>" ;

    } 

  
    var stringDatos = "";
        for(i=8; i < data.length; i++) {
            stringDatos += "Introduzca su " + data[i].campo + ":     " + "<input placeholder= " + data[i].campo + ">" + "<br>";
        }

        //BOTONES PROCESO Y RESETEO
        var btnWipe = "<button id=wipebtn>" + "Resetear formulario" + "</button>";
        var btnProceso = "<button id=procbtn>" + "Procesar formulario" + "</button>";

//BUSCAR PARA METER EL LO DE ARRIBA EN EL HTML
 var textoDeLaPizza = `
 <h1> pedido de la pizza <h1>
    <fieldset>
        <legend>Introduzca sus datos: </legend>
            ` + stringDatos + `
    </fieldset>
    <fieldset>
        <legend>Tipos de pizza</legend>
            <br>
            ` + stringTamaño + `
    </fieldset>
            <br>
    <fieldset>
        <legend>Ingredientes</legend>
            <br>
            ` + stringIngr + `
    </fieldset>
    ` + btnWipe + btnProceso + `
    
 `
//crear botones con funciones para meterle usos

//hasta aquí todo funciona.
    //afterend para que se muestre abajo
    apuntaDiv.insertAdjacentHTML("afterend", textoDeLaPizza);
 

} 


//mirar pq no funciona el reseteo
function botonWipear() {
    

        //botón que hace la misma llamada que el primero, con el objetivo de resetearlo;
        var creoBtnReset = document.getElementById("wipebtn")
        creoBtnReset.addEventListener("click", function() {

            rqstpizzaR.open('GET', 'datopizzas.json');
    
                  rqstpizzaR.onload = function() {
                    var pizzadatosR = JSON.parse(rqstpizzaR.responseText);
                        damepizza(pizzadatosR);   
               
    
            if (this.readyState == 4)  {
                if(this.status=200) {
                    //ESTO MANDA LOS DATOS A LA CONSOLA SI LA CONEXIÓN ES CORRECTA
                   console.log(pizzadatosR);  // lo quitamos para sustituirlo por el html en la web, sin él no aparecen los datos en consola!!
        
            }  else { 
                alert("ОПА ОПА ПИСДИЕЦ")
                }
        }
    }
    rqstpizzaR.send();
    });
            

}

function botonProcesar() {
    

}
//``````






















