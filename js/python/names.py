import random
import string

# Diccionario para almacenar los nombres de usuario y contraseñas generadas
usuarios = {}

def generar_id_contrasena():
    while True:
        # Generar un nombre de usuario aleatorio
        nombre_usuario = ''.join(random.choice(string.ascii_lowercase) for _ in range(6))

        # Generar una contraseña aleatoria
        contrasena = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(8))

        # Verificar si el nombre de usuario ya existe
        if nombre_usuario not in usuarios:
            usuarios[nombre_usuario] = contrasena
            return nombre_usuario, contrasena

# Ejemplo de uso
nombre, contrasena = generar_id_contrasena()
print("Nombre de usuario:", nombre)
print("Contraseña:", contrasena)
