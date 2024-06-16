
let esAdulto = true;
let tieneLicenciaDeConducir = false;

console.log(esAdulto);                 // true
console.log(tieneLicenciaDeConducir);  // false

let puedeConducir = esAdulto && tieneLicenciaDeConducir;
console.log(puedeConducir);            // false

tieneLicenciaDeConducir = true;
puedeConducir = esAdulto && tieneLicenciaDeConducir;
console.log(puedeConducir);            // true
