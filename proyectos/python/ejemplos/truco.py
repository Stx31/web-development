import random

def jugar_adivinanza():
    numero_secreto = random.randint(1, 100)
    intentos = 0

    print("¡Bienvenido al juego de adivinanzas!")
    print("Estoy pensando en un número del 1 al 100. ¿Puedes adivinar cuál es?")

    while True:
        intento = int(input("Introduce tu intento: "))
        intentos += 1

        if intento < numero_secreto:
            print("Demasiado bajo. Intenta nuevamente.")
        elif intento > numero_secreto:
            print("Demasiado alto. Intenta nuevamente.")
        else:
            print("¡Felicidades! ¡Adivinaste el número en {} intentos!".format(intentos))
            break

jugar_adivinanza()