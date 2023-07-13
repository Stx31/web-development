import random

nombres = ["Juan", "María", "Carlos", "Ana"]

def agregar_nombre(nombre):
    nombres.append(nombre)

def seleccionar_ganador():
    ganador = random.choice(nombres)
    return ganador


agregar_nombre("Pedro")
agregar_nombre("Laura")
agregar_nombre("Luis")

nombre_ganador = seleccionar_ganador()
print("¡El ganador es:", nombre_ganador, "!")

