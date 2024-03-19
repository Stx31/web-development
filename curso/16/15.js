const password= prompt("ingresar contraseña");
if (password.length>= 6 && password.indexOf(' ')===-1){
    console.log("valid password")

}else{
    console.log("incorrect fomrat password")
}
