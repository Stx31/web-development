print("¡Bienvenido a la historia de un aventurero!")
nombre = input("Por favor, ingresa el nombre del personaje principal: ")

print(f"\nHola {nombre}, eres un valiente aventurero que está a punto de embarcarse en una emocionante búsqueda.")
print("Tu misión es encontrar un antiguo tesoro perdido en una isla misteriosa.")

print("\nEn tu viaje, te encuentras con un viejo mapa que indica el camino hacia el tesoro.")
print("Emprendes tu aventura y llegas a una encrucijada.")

opcion = input("¿Qué camino eliges? (izquierda/derecha): ")

if opcion == "izquierda":
    print("\nDecides tomar el camino de la izquierda y continúas tu viaje.")
    print("En el camino, encuentras un río caudaloso y debes encontrar una manera de cruzarlo.")
    print("Después de buscar durante un tiempo, descubres un puente escondido.")

    puente = input("¿Cruzas el puente? (sí/no): ")

    if puente == "sí":
        print("\nDecides cruzar el puente y sigues avanzando.")
        print("Después de un arduo esfuerzo, finalmente llegas a la ubicación del tesoro.")
        print("¡Felicidades, has encontrado el tesoro perdido!")
    else:
        print("\nDecides no arriesgarte y buscar otra forma de cruzar el río.")
        print("Desafortunadamente, no encuentras ninguna alternativa y tu búsqueda del tesoro llega a su fin.")
        print("Aunque no encontraste el tesoro, siempre te quedará la experiencia de tu emocionante aventura.")
else:
    print("\Eliges tomar el camino de la derecha y sigues adelante.")
    print("En tu camino, te encuentras con un grupo de nativos amistosos que te ofrecen su ayuda.")
    print("Ellos te guían a través de terrenos peligrosos y te llevan directamente al tesoro.")
    print("¡Felicidades, has encontrado el tesoro perdido!")

print("\nGracias por jugar esta historia de aventuras. ¡Hasta la próxima!")