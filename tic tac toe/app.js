let caracter  = "X"
document.querySelectorAll(".grid div").forEach(Element =>{
    Element.addEventListener("click", ()=>{ //escuchar el evento click //
        if(Element.innerHTML===""){  //si no tienes contenido ponemos un caracter //
            Element.innerHTML = caracter
            caracter= caracter === "X" ? "O": "X"; // si el primer caracter es "x" el siguente sera una "o" sucesivamente
        }
    })
})

function reset(){
    document.querySelectorAll(".grid div").forEach((Element)=> {
        Element.innerHTML="";
    })
}