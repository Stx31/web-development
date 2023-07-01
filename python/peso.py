def calcular_peso_corporal():
    altura = float(input("Ingresa tu altura en metros: "))
    peso = float(input("Ingresa tu peso en kilogramos: "))

    # Calcula el índice de masa corporal (IMC)
    imc = peso / (altura ** 2)

    # Determina la categoría de peso según el IMC
    if imc < 18.5:
        categoria = "Bajo peso"
    elif imc < 24.9:
        categoria = "Peso normal"
    elif imc < 29.9:
        categoria = "Sobrepeso"
    else:
        categoria = "Obesidad"

    print("Tu índice de masa corporal es: {:.2f}".format(imc))
    print("Categoría de peso: " + categoria)

calcular_peso_corporal()