// Fernandez Lopetegui Karen 1H 
// Ejercicio IF-03
// Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
//txtIdEdad



function mostrar()
{
	//tomo la edad  
	var edad;

	edad= txtIdEdad.value;
	edad: parseInt(edad);

	if(edad>=18)
{

  alert("Usted es mayor de edad");


}

  else(edad<18)
{

 alert("Usted es menor de edad");



}

}//FIN DE LA FUNCIÓN