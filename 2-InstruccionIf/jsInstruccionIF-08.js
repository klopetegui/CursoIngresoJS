/*Fernandez Lopetegui Karen 1H
Ejercicio IF-08
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'

*/

function mostrar()
{
	//tomo la edad  
	
	var edad;

	var estdoCivil;

	edad= txtIdEdad.value;
	edad=parseInt(edad);

	estdoCivil= estadoCivil.value;



     if (edad>17 && estdoCivil == "Soltero") 
     {
           alert("Es soltero y no es menor.");
     }

	


}//FIN DE LA FUNCIÓN