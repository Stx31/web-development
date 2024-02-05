var fecha = new Date();
var fecha_exp = fecha.toGMTString();

function leerCookie(nombre) {
    var comienzo_cookie = nombre + "=";
    var cookies = document.cookie.split(';');

    for (i = 0; i < cookies.length; i++) {
        trozo = cookies[i];
        while (trozo.charAt(0) == ' ') trozo = trozo.substring(1, trozo.length)
        if (trozo.indexOf(comienzo_cookie) == 0) {

            return trozo.substring(comienzo_cookie.length, trozo.length);
        }
    }
}