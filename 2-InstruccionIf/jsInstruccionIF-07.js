//Fernandez Lopetegui Karen 1H
//Ejercicio IF-07
//Enunciado:||
//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'


function mostrar()
{
	//tomo la edad  txtIdEdad, estadoCivil


	var edad;

	var estdoCivil;

	edad= txtIdEdad.value;
	edad=parseInt(edad);

	estdoCivil= estadoCivil.value;



     if (edad<18 && estdoCivil != "Soltero") 
     {
           alert("Es muy pequeño para NO ser soltero.");
     }


}//FIN DE LA FUNCIÓN