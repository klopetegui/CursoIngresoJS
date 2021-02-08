function mostrar()
{
  var nombreUno;
  var nombreDos;
  var pesoUno;
  var pesoDos;
  var suma;
  var promedio;

nombreUno= prompt("Ingresar el nombre del primer integrante de la pareja");


nombreDos= prompt("Ingresar el nombre del segundo integrante de la pareja");


pesoUno= prompt("Ingresar el peso del primer integrante de la pareja");
pesoUno= parseInt(pesoUno);


pesoDos= prompt("Ingresar el peso del segundo integrante de la pareja");
pesoDos= parseInt(pesoDos);

suma= pesoUno+pesoDos;

promedio= suma/2;



alert("Ustedes se llaman "+nombreUno+ " y "+ nombreDos+", pesan "+pesoUno+ " y "+pesoDos+ "kilos y el promedio de peso es de "+promedio+ " kilos.");



}
