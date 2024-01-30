def Tabla_multi(tabla,limite):
    for i in range(1,limite):
        resultado=tabla*1
        print(f"{tabla}x{i}={resultado}")
        tabla=int (input("que tabla de x quieres asber?"))
        Tabla_multi(tabla,21)