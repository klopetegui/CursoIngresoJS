function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
	
switch(mesDelAño)
	{
		case "Enero":
		case "Marzo":
		case "Julio":
		case "Mayo":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("Tiene 31 días.");
		break;
		case "Junio":
		case "Abril":
		case "Septiembre":
		case "Noviembre":
		alert("Tiene 30 días.");
		break;
		case"Febrero":
		alert("Tiene 28 días.");
		break;


	}


}//FIN DE LA FUNCIÓN