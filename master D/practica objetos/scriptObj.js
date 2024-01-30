function Pelicula(titulo, anio, duracion, precioAlquiler){

	this.titulo = titulo;
	this.anio = anio;
	this.duracion = duracion;
	this.precioAlquiler = precioAlquiler;
}

var pablo = new Pelicula("Matrix", 1998, 120, 4);
var ana = new Pelicula("Star Wars", 1978, 134, 3);
var lucia = new Pelicula("Rogue One", 2016, 140, 5);

function mostrarFichaPelicula(){															
	var e = document.getElementById("selectUsuario");
	var usuario = e.options[e.selectedIndex].value;
	usuario = eval(usuario);
	var datos = "Título: " +usuario.titulo +"\n"+ "Año: " +usuario.anio +"\n"+ "Duración: " + usuario.duracion +" minutos\n"+ "Precio Alquiler: " + usuario.precioAlquiler + " €";
	alert(datos);
	document.getElementById("text").value = datos;
}