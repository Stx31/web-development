
function agregarComentario() {
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    const nuevoComentario = document.createElement('li');
    const spanUsuario = document.createElement('span');
    spanUsuario.textContent = nombre + ':';
    const pComentario = document.createElement('p');
    pComentario.textContent = comentario;

    nuevoComentario.appendChild(spanUsuario);
    nuevoComentario.appendChild(pComentario);
    document.getElementById('lista-comentarios').appendChild(nuevoComentario);

    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
}