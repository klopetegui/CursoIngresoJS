function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		alert("Se encuentra al Sur");
		break;
		default:
		alert("Se encuentra al Este");
		break;
	}

}//FIN DE LA FUNCIÓN