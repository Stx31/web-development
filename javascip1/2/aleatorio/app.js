function ale(minimo, maximo){
   return Math.floor(Math.random() *(maximo-minimo)+minimo);

}
for(let i=1; i<=100;i++){
    console.log(ale (1,100))
}
