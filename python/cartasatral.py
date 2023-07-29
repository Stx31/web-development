def obtener_signo_zodiacal(dia, mes):
   
    fechas_inicio_signos = [
        (21, 3), (20, 4), (21, 5), (21, 6),
        (23, 7), (23, 8), (23, 9), (23, 10),
        (22, 11), (22, 12), (20, 1), (19, 2)
    ]

 
    nombres_signos = [
        "Aries", "Tauro", "Géminis", "Cáncer",
        "Leo", "Virgo", "Libra", "Escorpio",
        "Sagitario", "Capricornio", "Acuario", "Piscis"
    ]

    # Determinar el signo zodiacal en base a la fecha
    for i, (dia_inicio, mes_inicio) in enumerate(fechas_inicio_signos):
        if (mes == mes_inicio and dia >= dia_inicio) or (mes == (mes_inicio % 12) + 1 and dia <= dia_inicio):
            return nombres_signos[i]

def obtener_ascendente(hora_nacimiento):
   

    return obtener_signo_zodiacal(1, hora_nacimiento.month)

def carta_astral():
    print("Bienvenido a tu carta astral.")
    nombre = input("Ingresa tu nombre: ")
    edad = int(input("Ingresa tu edad: "))
    hora_nacimiento = input("Ingresa tu hora de nacimiento (HH:MM): ")

   
    signo_zodiacal = obtener_signo_zodiacal(1, hora_nacimiento.month)
    ascendente = obtener_ascendente(hora_nacimiento)

    print("\n--- Resultados ---")
    print(f"Nombre: {nombre}")
    print(f"Edad: {edad} años")
    print(f"Signo Zodiacal: {signo_zodiacal}")
    print(f"Ascendente: {ascendente}")

if __name__ == "__main__":
    carta_astral()
