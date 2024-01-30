import random

# Generador de números de teléfono aleatorios
def generar_numero_telefono():
    numero = ""
    for _ in range(10):
        numero += str(random.randint(0, 9))
    return numero

# Diccionario de códigos de países
codigos_paises = {
    "Argentina": "+54",
    "Brasil": "+55",
    "Chile": "+56",
    "Colombia": "+57",
    "España": "+34",
    "Estados Unidos": "+1",
    # Agrega más países y sus códigos según sea necesario
}

# Prueba del generador de números de teléfono
for _ in range(10):
    pais = random.choice(list(codigos_paises.keys()))
    codigo = codigos_paises[pais]
    numero_telefono = generar_numero_telefono()
    print(f"{pais} ({codigo}) {numero_telefono}")
