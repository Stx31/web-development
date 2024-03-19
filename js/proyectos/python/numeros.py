import random

def generar_numero_telefono():
    codigo_pais = "+1"  # Código de país, puedes cambiarlo según tu ubicación
    codigo_area = str(random.randint(100, 999))  # Código de área de tres dígitos
    prefijo = str(random.randint(100, 999))  # Prefijo de tres dígitos
    linea = str(random.randint(1000, 9999))  # Número de línea de cuatro dígitos

    numero_telefono = codigo_pais + codigo_area + prefijo + linea
    return numero_telefono

# Ejemplo de uso
numero_telefono = generar_numero_telefono()
print(numero_telefono)
