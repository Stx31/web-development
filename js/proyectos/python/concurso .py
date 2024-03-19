import random

class Competencia:
    def __init__(self):
        self.participantes = []
        self.rondas = 0
        self.ganador = None

    def agregar_participante(self, nombre):
        self.participantes.append(nombre)

    def generar_enfrentamientos(self):
        random.shuffle(self.participantes)
        self.rondas = len(self.participantes) // 2

    def realizar_enfrentamientos(self):
        for ronda in range(self.rondas):
            participante1 = self.participantes[ronda * 2]
            participante2 = self.participantes[ronda * 2 + 1]

            # Simulamos el resultado de cada enfrentamiento
            resultado = random.choice([participante1, participante2])
            print(f"Ronda {ronda + 1}: {participante1} vs {participante2} -> Ganador: {resultado}")

            if ronda == self.rondas - 1:
                self.ganador = resultado

    def obtener_ganador(self):
        if self.ganador:
            return self.ganador
        else:
            print("El torneo aún no ha finalizado.")

# Ejemplo de uso
if __name__ == "__main__":
    competencia = Competencia()
    competencia.agregar_participante("Equipo 1")
    competencia.agregar_participante("Equipo 2")
    competencia.agregar_participante("Equipo 3")
    competencia.agregar_participante("Equipo 4")

    competencia.generar_enfrentamientos()
    competencia.realizar_enfrentamientos()

    ganador = competencia.obtener_ganador()
    print(f"El ganador del torneo es: {ganador}")
