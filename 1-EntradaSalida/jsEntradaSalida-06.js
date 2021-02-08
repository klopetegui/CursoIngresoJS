/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
let numero2;
let numero1;
let resultado;

function sumar()
{
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;

	alert("El resultado es: "+resultado);
	
}

