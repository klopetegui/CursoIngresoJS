// Fernandez Lopetegui Karen 1h
//Ejercicio IF-05
//Al ingresar una edad solo debemos informar si la persona NO es adolescente.



function mostrar()
{
	//tomo la edad (txtIdEdad)  
	
  var edad;

  edad= txtIdEdad.value;
  edad= parseInt(edad);

if (edad<13 || edad>17)

{

    alert("Usted no es adolescente");

}



}//FIN DE LA FUNCIÓN