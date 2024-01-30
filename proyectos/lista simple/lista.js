// Array para almacenar los elementos de la lista de compras
var listaDeCompras = [];

// Función para agregar elementos a la lista
function agregarElemento() {
  var elemento = prompt("Ingrese un elemento para agregar a la lista de compras:");
  
  // Verificar si el usuario ingresó un elemento válido
  if (elemento !== null && elemento !== "") {
    listaDeCompras.push(elemento);
    console.log("Elemento agregado a la lista de compras: " + elemento);
  } else {
    console.log("No se ingresó ningún elemento.");
  }
}

// Función para mostrar la lista de compras
function mostrarLista() {
  console.log("Lista de compras:");
  
  // Verificar si la lista está vacía
  if (listaDeCompras.length === 0) {
    console.log("La lista está vacía.");
  } else {
    for (var i = 0; i < listaDeCompras.length; i++) {
      console.log(i + 1 + ". " + listaDeCompras[i]);
    }
  }
}

// Función para eliminar un elemento de la lista
function eliminarElemento() {
  var indice = prompt("Ingrese el número del elemento que desea eliminar:");
  
  // Verificar si el usuario ingresó un número válido
  if (indice !== null && indice !== "") {
    indice = parseInt(indice);
    
    // Verificar si el índice es válido
    if (indice >= 1 && indice <= listaDeCompras.length) {
      var elementoEliminado = listaDeCompras.splice(indice - 1, 1);
      console.log("Elemento eliminado de la lista de compras: " + elementoEliminado);
    } else {
      console.log("Índice inválido.");
    }
  } else {
    console.log("No se ingresó ningún índice.");
  }
}

// Ejemplo de uso
agregarElemento();
agregarElemento();
mostrarLista();
eliminarElemento();
mostrarLista();