def generar_cv(nombres, apellidos, direccion, telefono, email, habilidades, experiencias):
    cv = f"CV de {nombres} {apellidos}\n\n"
    cv += f"Dirección: {direccion}\n"
    cv += f"Teléfono: {telefono}\n"
    cv += f"Email: {email}\n\n"

    cv += "Habilidades:\n"
    for habilidad in habilidades:
        cv += f"- {habilidad}\n"
    cv += "\n"

    cv += "Experiencia laboral:\n"
    for experiencia in experiencias:
        cv += f"{experiencia['cargo']} - {experiencia['empresa']} ({experiencia['año']})\n"
        cv += f"{experiencia['descripcion']}\n\n"

    return cv

# Ejemplo de uso
nombres = "Juan"
apellidos = "Pérez"
direccion = "123 Calle Ejemplo, Ciudad, País"
telefono = "0123456789"
email = "juanperez@example.com"
habilidades = ["Python", "Java", "HTML/CSS", "SQL"]
experiencias = [
    {
        "cargo": "Desarrollador Python",
        "empresa": "Empresa A",
        "año": "2019-2021",
        "descripcion": "Desarrollo de aplicaciones web utilizando Python y Django."
    },
    {
        "cargo": "Practicante de desarrollo",
        "empresa": "Empresa B",
        "año": "2018",
        "descripcion": "Diseño y desarrollo de funcionalidades para una aplicación móvil."
    }
]

cv = generar_cv(nombres, apellidos, direccion, telefono, email, habilidades, experiencias)
print(cv)