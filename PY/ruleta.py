import random

cupos = list(range(1, 11))
pesos = [1] * 10

def imprimir_estado(cupos, pesos):
    print("Cupos actuales:", cupos)
    print("Pesos actuales:", pesos)

def girar_ruleta(cupos, pesos):
    seleccionado = random.choices(cupos, weights=pesos, k=1)[0]
    idx = cupos.index(seleccionado)
    pesos[idx] += 1
    print(f"Cupo seleccionado: {seleccionado}")
    return seleccionado

def ejecutar_ruleta():
    cupos_actuales = cupos.copy()
    pesos_actuales = pesos.copy()

    while len(cupos_actuales) > 1:
        imprimir_estado(cupos_actuales, pesos_actuales)
        seleccionado = girar_ruleta(cupos_actuales, pesos_actuales)
        idx = cupos_actuales.index(seleccionado)
        cupos_actuales.pop(idx)
        pesos_actuales.pop(idx)
        print("\n" + "-"*30 + "\n")
    
    print(f"El ganador es: {cupos_actuales[0]}")

ejecutar_ruleta()
