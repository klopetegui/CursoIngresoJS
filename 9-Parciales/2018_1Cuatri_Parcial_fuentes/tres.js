function mostrar()
{
 var precio;
 var porcentaje;
 var conversionPorcentaje;
 var total;

precio=prompt("Ingrese precio");
precio= parseInt(precio);

porcentaje= prompt("Ingrese porcentaje de descuento"); 
porcentaje= parseInt(porcentaje);

conversionPorcentaje=precio*(porcentaje/100);

total= precio - conversionPorcentaje;

elPrecioFinal.value= total;




}
