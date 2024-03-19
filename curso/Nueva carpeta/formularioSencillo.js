//entrar al formulario
const formulario = document.getElementById("formulario");

//acceso a todos los inputs
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");

// Acceso a la comprobación de la validación del formulario
const valida = {
    nombre:false,
    apellido:false,
    telefono:false,
    email:false
}
// Envío del formulario
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
})

// Validación del nombre
nombre.addEventListener("blur",()=>{
    let name_re = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{2,30}$/;

    if(nombre.value == "" || nombre == null){
        setErrorFor(nombre,"No puede dejar el nombre en blanco");
        valida.nombre = false;
    }else{
        if(!name_re.exec(nombre.value)){

        }else{
            valida.nombre =true;
        }
    }

})


// Validación de los apellidos
apellidos.addEventListener("blur",()=>{
    let name_re = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{2,50}$/;
    
})

// Validación del teléfono
telefono.addEventListener("blur",()=>{
    let tel_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;
    
})

// Validacion del email
email.addEventListener("blur",()=>{
    let email_re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
})


// Mensaje de error
function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";


}


//si todo esta correcto
function setSuccessFor(input){

}
