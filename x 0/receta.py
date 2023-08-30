
   # pip install googlesearch-python
from googlesearch import search

def buscar_receta(query):
    try:
        
        resultados = search(query + " receta", num=1, stop=1, lang='es')

 
        primer_resultado = next(resultados)

        print("Receta encontrada:")
        print(primer_resultado)
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    plato = input("¿Qué receta estás buscando? ")
    buscar_receta(plato)
