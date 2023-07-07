import requests

url = 'https://www.google.com/search?client=opera&hs=SHv&sxsrf=AB5stBjR5F6yhm_wyFEzqzKbFID_gi-o4A:1688757757296&q=meme+foto&tbm=isch&sa=X&ved=2ahUKEwjezfDxqP3_AhUtTKQEHS3fBtsQ0pQJegQIEBAB&biw=1912&bih=950&dpr=1#imgrc=4HoDJkBKH7y9qM'  # URL de la imagen que deseas descargar
nombre_archivo = 'imagen.jpg'  # Nombre que deseas darle al archivo descargado

response = requests.get(url)

if response.status_code == 200:
    with open(nombre_archivo, 'wb') as f:
        f.write(response.content)
    print('La imagen se ha descargado correctamente.')
else:
    print('Error al descargar la imagen:', response.status_code)