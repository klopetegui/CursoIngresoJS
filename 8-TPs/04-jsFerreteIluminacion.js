/* Fernandez Lopetegui Karen 1H
tp4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. txtIdCantidad txtIdprecioDescuento 
Marca
 */
function CalcularPrecio () 
{
 	var precioF;
 	var cantidad;
 	var sinDesc;
 	var precioUnit;
 	var marc;
 	var impuesto;
 	var porcentaje;


 	cantidad=  document.getElementById("txtIdCantidad").value;
 	cantidad= parseInt(cantidad);

 	precioUnit=35;

 	marc= document.getElementById("Marca").value;

 	sinDesc= cantidad*precioUnit;
 	

//A)
 	if(cantidad>5)
 	{
 		precioF=sinDesc-(sinDesc*0.5);
 		
 	}	

 //B)	

 	else
 	if (cantidad==5)
 	{
 		if (marc=="ArgentinaLuz") 
 		{
 			precioF=sinDesc-(sinDesc*0.4);
 		} 
 		else
 		{
 			precioF=sinDesc-(sinDesc*0.3);
 		}
 	}


//C)	
	if(cantidad==4)
	{
		if(marc=="ArgentinaLuz" || marc=="FelipeLamparas")
		{
			precioF= sinDesc-(sinDesc*0.25);
		}
		else 
		{
			precioF= sinDesc-(sinDesc*0.2);
		}
	}
//D) 
	if (cantidad==3 )
	{
		if(marc=="ArgentinaLuz")
		{
			precioF= sinDesc-(sinDesc*0.15);
		}
		else
		{
			if ( marc=="FelipeLamparas")
			{
				precioF= sinDesc-(sinDesc*0.1);
			}
			else
			{
				precioF= sinDesc-(sinDesc*0.05);
			}
		}
	}
		porcentaje=precioF*0.1;
		impuesto= precioF+porcentaje;
//E)
	if(precioF>120)	
	{
		

		alert("IIBB Usted pago"+ impuesto+", siendo " +porcentaje+" el impuesto que se pagó.");

	}
 	
 	document.getElementById("txtIdprecioDescuento").value =precioF;
}
