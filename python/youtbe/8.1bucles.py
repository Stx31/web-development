#adivina numero 
import random

print(" juego de adivina un numero ")

print(" pilla un numero del 1 al 5")

numero_secreto= random.randint(1,5)

adivinado=False

while not adivinado:

    numero_usu=int(input("ingrese un numero"))
    
    if (numero_usu==numero_secreto):
        print("numero correcto")
        adivinado =True