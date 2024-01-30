import random

def obtener_palabra():
    palabras = ["python", "cucumber", "ruby", "penelope", "html"]
    return random.choice(palabras)

def jugar():
    palabra = obtener_palabra()
    palabra_adivinada = "_" * len(palabra)
    intentos = 6
    letras_adivinadas = []

    print("¡Bienvenido al Juego del Ahorcado!")
    print(palabra_adivinada)

    while True:
        letra = input("Adivina una letra: ").lower()

        if letra in letras_adivinadas:
            print("Ya adivinaste esa letra. Intenta con otra.")
            continue

        letras_adivinadas.append(letra)

        if letra in palabra:
            print("¡Correcto!")
            nueva_palabra = ""
            for i in range(len(palabra)):
                if palabra[i] == letra:
                    nueva_palabra += letra
                else:
                    nueva_palabra += palabra_adivinada[i]
            palabra_adivinada = nueva_palabra
        else:
            print("Incorrecto. Pierdes un intento.")
            intentos -= 1

        print(palabra_adivinada)

        if palabra_adivinada == palabra:
            print("¡Ganaste! La palabra es:", palabra)
            break

        if intentos == 0:
            print("¡Perdiste! La palabra era:", palabra)
            break

if __name__ == "__main__":
    jugar()