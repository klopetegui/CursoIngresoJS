/* Nombre : Karen Fernandez Lopetegui 
Ejercicio 1
Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"*/
function mostrar()
{
	var nombreDelAlumno;
	var edadDelAlumno;

	nombreDelAlumno = document.getElementById("txtIdNombre").value;

	edadDelAlumno = prompt("Ingrese su Edad");

	document.write("Usted se llama: " + nombreDelAlumno + " y tiene " + edadDelAlumno + " años ");
 

}


