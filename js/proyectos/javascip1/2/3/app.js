var numero =parseInt(prompt("numero", 0))
while(isNaN(numero)){
 numero=parseInt(prompt("pon numero ", 0 ));
}
if (numero %2 ==0){
    document.write("el nuermo es par")

}else{
    document.write("el numero es impar")
}