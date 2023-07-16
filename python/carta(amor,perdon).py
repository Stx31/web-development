# Diccionario con mensajes de amor
mensajes_amor = {
    "intro": "Querido/a {nombre},",
    "cuerpo": "Escribo esta carta para expresar todo lo que siento por ti. Eres la luz de mi vida y cada momento a tu lado es un regalo. Tu amor me llena de alegría y esperanza, y no puedo imaginar un futuro sin ti. Eres mi todo y te amo más de lo que las palabras pueden expresar.",
    "despedida": "Con todo mi amor,\n{tu nombre}"
}

# Diccionario con mensajes de perdón
mensajes_perdon = {
    "intro": "Querido/a {nombre},",
    "cuerpo": "Lamento profundamente mis acciones y las consecuencias que han tenido en nuestra relación. Reconozco mis errores y me arrepiento sinceramente de haber causado dolor. No hay excusas para lo que hice, pero quiero que sepas que estoy dispuesto/a a cambiar y a hacer todo lo posible para enmendar mis errores.",
    "despedida": "Con humildad,\n{tu nombre}"
}

def generar_carta(tipo, nombre, motivo):
    if tipo == "amor":
        mensajes = mensajes_amor
    elif tipo == "perdon":
        mensajes = mensajes_perdon
    else:
        return "Tipo de carta no válido. Por favor, elige entre 'amor' o 'perdon'."

    carta = mensajes["intro"].format(nombre=nombre) + "\n\n"
    carta += mensajes["cuerpo"] + "\n\n"
    carta += mensajes["despedida"].format(tu_nombre="Tu nombre") + "\n"

    return carta

nombre_destinatario = input("Ingrese el nombre del destinatario: ")
tipo_carta = input("¿Qué tipo de carta desea generar (amor o perdon)? ")

if tipo_carta.lower() in ["amor", "perdon"]:
    motivo = input("Ingrese el motivo: ")
    carta_generada = generar_carta(tipo_carta.lower(), nombre_destinatario, motivo)
    print("\n=== Carta generada ===")
    print(carta_generada)
else:
    print("Opción inválida. Por favor, elija entre 'amor' o 'perdon'.")
