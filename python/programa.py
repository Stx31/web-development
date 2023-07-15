def generar_factura():
    nombre = input("Ingrese su nombre: ")
    print("\n=== Generación de Factura ===\n")
    print("Bienvenido(a),", nombre)
    print("Por favor, ingrese los detalles de su compra.")

    productos = []
    cantidades = []
    precios_unitarios = []

    while True:
        producto = input("\nProducto (Ingrese 'fin' para finalizar): ")
        if producto.lower() == "fin":
            break

        cantidad = int(input("Cantidad: "))
        precio_unitario = float(input("Precio unitario: "))

        productos.append(producto)
        cantidades.append(cantidad)
        precios_unitarios.append(precio_unitario)

    subtotal = 0
    print("\n=== Detalles de la compra ===")
    for i in range(len(productos)):
        subtotal += cantidades[i] * precios_unitarios[i]
        print(f"{productos[i]} - Cantidad: {cantidades[i]}, Precio unitario: {precios_unitarios[i]}")

    impuesto = subtotal * 0.16
    total = subtotal + impuesto

    print("\n=== Factura ===")
    print("Cliente:", nombre)
    print("\nDetalles de la compra:")
    for i in range(len(productos)):
        print(f"{productos[i]} - Cantidad: {cantidades[i]}, Precio unitario: {precios_unitarios[i]}")

    print("\nSubtotal: $", subtotal)
    print("Impuesto (16%): $", impuesto)
    print("Total: $", total)


generar_factura()
