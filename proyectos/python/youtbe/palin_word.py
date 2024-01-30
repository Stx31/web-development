def es_palindromo(palabra):
   
    palabra = palabra.lower().replace(" ", "")
    
    return palabra == palabra[::-1]

lista_palabras = ["reconocer", "oso", "radar", "python", "anilina"]

palindromos = [palabra for palabra in lista_palabras if es_palindromo(palabra)]

print("Palabras palíndromas:")
for palabra in palindromos:
    print(palabra)
