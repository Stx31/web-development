def carta_despedida(nombre):
    mensaje = f"Querido/a {nombre},\n\n"
    mensaje += "Espero que esta carta te encuentre bien. Quiero aprovechar esta oportunidad para expresar mis sentimientos y emociones mientras nos preparamos para despedirnos.\n\n"
    mensaje += "Los momentos que compartimos juntos serán atesorados en mi corazón para siempre. Cada risa, cada conversación y cada experiencia que compartimos han dejado una huella imborrable en mi vida.\n\n"
    mensaje += "Aunque esta despedida puede ser agridulce, también estoy emocionado/a por los nuevos caminos que ambos seguiremos. Sé que nuestras trayectorias nos llevarán a lugares fascinantes y llenos de oportunidades.\n\n"
    mensaje += "Quiero agradecerte por tu amistad, apoyo y por los recuerdos que creamos juntos. Aunque estaremos separados físicamente, nuestra conexión perdurará en el tiempo.\n\n"
    mensaje += "Te deseo éxito en todas tus futuras aventuras y espero con ansias el día en que podamos reunirnos nuevamente. Mantente en contacto y no dudes en escribir o llamarme en cualquier momento.\n\n"
    mensaje += "Hasta pronto, querido/a amigo/a.\n\n"
    mensaje += "Con cariño,\n[Tu nombre]"

    return mensaje

nombre_destinatario = input("Por favor, ingresa el nombre del destinatario: ")
carta = carta_despedida(nombre_destinatario)
print(carta)
