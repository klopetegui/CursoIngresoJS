/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

   
function sumar()
{
	let numero2;
    let numero1;
    let suma;

    numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	suma=numero1+numero2


	alert("El resultado de la suma es : "+suma);
	
}


function restar()
{
     let numero2;
     let numero1;
     let resta;

	 numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resta=numero1-numero2


	alert("El resultado de la resta es : "+resta);

	
	
}

function multiplicar()
{    let numero2;
      let numero1;
      let multiplicacion;
	 numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	multiplicacion=numero1*numero2;


	alert("El resultado de la multiplicacion es : "+multiplicacion);
}

function dividir()
{    let numero2;
      let numero1;
       let dividision;
	 numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	dividision=numero1/numero2;

	alert("El resultado de la division es : "+dividision);
}

