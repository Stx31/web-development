import turtle

# Inicializar la ventana de dibujo
window = turtle.Screen()
window.bgcolor("white")

# Crear una tortuga
tortuga = turtle.Turtle()
tortuga.speed(2)  # Velocidad de dibujo (1 = más lento, 10 = más rápido)
tortuga.color("blue")  # Color de la tortuga
tortuga.pensize(3)  # Tamaño del trazo

# Dibujar un cuadrado
for _ in range(4):
    tortuga.forward(100)  # Avanzar 100 unidades
    tortuga.right(90)  # Girar 90 grados a la derecha

# Cerrar la ventana al hacer clic en ella
window.exitonclick()