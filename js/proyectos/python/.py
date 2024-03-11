import random

def lanzar_dados():
    dado1 = random.randint(1, 6)
    dado2 = random.randint(1, 6)
    return dado1, dado2

def calcular_probabilidad(sum_objetivo, num_intentos):
    exitos = 0

    for _ in range(num_intentos):
        dado1, dado2 = lanzar_dados()
        suma = dado1 + dado2
        if suma == sum_objetivo:
            exitos += 1

    probabilidad = exitos / num_intentos
    return probabilidad

