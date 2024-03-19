$(document).ready(function() {
    // Cargar pedidos existentes 
    var pedidos = localStorage.getItem('pedidos');
    if (pedidos) {
        pedidos = JSON.parse(pedidos);
        mostrarPedidos(pedidos);
    } else {
        pedidos = [];
    }

    // Agregar un nuevo pedido
    $('#agregar').click(function() {
        var nombre = $('#nombre').val();
        var producto = $('#producto').val();

        if (nombre && producto) {
            var pedido = {
                nombre: nombre,
                producto: producto
            };
            pedidos.push(pedido);
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
            mostrarPedidos(pedidos);
            $('#nombre').val('');
            $('#producto').val('');
        } else {
            alert('Por favor ingrese nombre y producto.');
        }
    });

    // Función para mostrar los pedidos en la tabla
    function mostrarPedidos(pedidos) {
        var tabla = $('#tabla-pedidos tbody');
        tabla.empty();
        for (var i = 0; i < pedidos.length; i++) {
            var pedido = pedidos[i];
            var fila = $('<tr><td>' + pedido.nombre + '</td><td>' + pedido.producto + '</td></tr>');
            tabla.append(fila);
        }
    }
});
